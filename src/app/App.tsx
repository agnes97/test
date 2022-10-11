import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Container from '@mui/material/Container'

import { Footer } from '../features/Footer'
import { Header } from '../features/Header'

import { Home } from '../pages/Home'
import { MovieDetail } from '../pages/MovieDetail'

export const App: React.FC = () => (
	<Container
		disableGutters
		maxWidth={false}
		sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}
	>
		<Header />
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/:id" element={<MovieDetail />} />
		</Routes>
		<Footer />
	</Container>
)
