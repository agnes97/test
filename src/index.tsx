import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from '@mui/material/GlobalStyles'
import CssBaseline from '@mui/material/CssBaseline'

import { store } from './app/store'
import { App } from './app/App'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element!')

const root = createRoot(rootElement)

import {
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material/styles'

const theme = responsiveFontSizes(createTheme())

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<GlobalStyles
					styles={{
						main: {
							minHeight: '100vh',
							display: 'flex',
							flexDirection: 'column',
						},
					}}
				/>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>,
)
