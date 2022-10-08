import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'

import { store } from './app/store'
import App from './app/App'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Failed to find the root element!')

const root = createRoot(rootElement)

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
)
