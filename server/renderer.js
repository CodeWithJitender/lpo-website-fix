import fs from 'fs';
import path from 'path';
import React from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import CssBaseline from '@mui/material/CssBaseline';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import theme from '@/theme';
import App from '@/App';

import createEmotionCache from '../createEmotionCache';

export default (req, res) => {
	const cache = createEmotionCache();
	const { extractCriticalToChunks, constructStyleTagsFromChunks } =
    createEmotionServer(cache);

	console.log("dsffsfsdfdsf: ", path.resolve(__dirname, 'assets-manifest.json'));
	const manifestPath = path.resolve(__dirname, 'assets-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

  const clientJs = manifest['main.js'];
  const stylesCss = manifest['main.css'];

  const content = renderToString(
		<CacheProvider value={cache}>
			<ThemeProvider theme={theme}>
				<StaticRouter location={req.url}>
					<CssBaseline />
					<App />
				</StaticRouter>
			</ThemeProvider>
		</CacheProvider>
  );

	// Grab the CSS from emotion
  const emotionChunks = extractCriticalToChunks(content);
  const emotionCss = constructStyleTagsFromChunks(emotionChunks);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
				<link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@700&family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet">
				<title>GlocalLPO</title>
				${emotionCss}
				<link rel="stylesheet" type="text/css" href="${stylesCss}">
      </head>
      <body>
        <div id="root">${content}</div>
				<script src="${clientJs}"></script>
      </body>
    </html>
  `;

  res.send(html);
};
