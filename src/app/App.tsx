import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'

import { Footer } from '../features/Footer'
import { Header } from '../features/Header'

import Home from '../pages/Home'

export const App: React.FC = () => (
	<Container
		disableGutters
		maxWidth={false}
		sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}
	>
		<Header />
		{/* TODO: MUI MIN HEIGHT 100VH RESEARCH! */}
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
		<Footer />
	</Container>
)

export default App
