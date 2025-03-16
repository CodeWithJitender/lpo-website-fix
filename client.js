import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';

import createEmotionCache from './createEmotionCache';

import theme from '@/theme';

import App from '@/App';

const cache = createEmotionCache();

hydrateRoot(
  document.getElementById('root'),
	<CacheProvider value={cache}>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</CacheProvider>
);
