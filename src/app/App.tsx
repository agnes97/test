import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'

export const App: React.FC = () => (
	<Routes>
		<Route path="/" element={<Home />} />
	</Routes>
)

export default App