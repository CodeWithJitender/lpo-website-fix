import fs from 'fs';
import path from 'path';
import React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import CssBaseline from '@mui/material/CssBaseline';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { getSelectorsByUserAgent } from 'react-device-detect';
import { ChunkExtractor } from '@loadable/server';

import theme from '@/theme';
import App from '@/App';

import { DeviceProvider } from '@/context/DeviceContext';

import createEmotionCache from '../createEmotionCache';

export default (req, res) => {
	const cache = createEmotionCache();
	const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

	const userAgent = req.headers['user-agent'] || '';

	const deviceInfo = getSelectorsByUserAgent(userAgent)

	const statsFile = path.resolve(process.cwd(), 'build/public/loadable-stats.json');
	const extractor = new ChunkExtractor({ statsFile, entrypoints: ['client'] });

  const jsx = extractor.collectChunks(
		<DeviceProvider value={deviceInfo}>
			<CacheProvider value={cache}>
				<ThemeProvider theme={theme}>
					<StaticRouter location={req.url}>
						<CssBaseline />
						<App  />
					</StaticRouter>
				</ThemeProvider>
			</CacheProvider>
		</DeviceProvider>
  );

	const content = renderToString(jsx);

	// Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(content);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
				<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
				<link rel="icon" type="image/png" href="/assets/favicon.png">
				<link
					rel="stylesheet"
					type="text/css"
					charset="UTF-8"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
				/>
				<link
					rel="stylesheet"
					type="text/css"
					href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
				/>
				<title>Glocal LPO</title>
				${extractor.getLinkTags()}
				${extractor.getStyleTags()}
				${emotionCss}
      </head>
      <body>
        <div id="root">${content}</div>
				<div id="menu-root"></div>
				<script>
          window.__DEVICE_INFO__ = ${JSON.stringify(deviceInfo)};
        </script>
				${extractor.getScriptTags()}
      </body>
    </html>
  `;

  res.send(html);
};
