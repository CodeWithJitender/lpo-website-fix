import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import { loadableReady } from '@loadable/component';

import createEmotionCache from './createEmotionCache';

import { DeviceProvider } from '@/context/DeviceContext';

import theme from '@/theme';

import App from '@/App';

const cache = createEmotionCache();

const deviceInfo = (window).__DEVICE_INFO__;

loadableReady(() => {
	hydrateRoot(
		document.getElementById('root'),
		<DeviceProvider value={deviceInfo}>
			<CacheProvider value={cache}>
				<ThemeProvider theme={theme}>
					<BrowserRouter
						future={{
							v7_startTransition: true,
							v7_relativeSplatPath: true
						}}
					>
						<CssBaseline />
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</CacheProvider>
		</DeviceProvider>
	);
});
