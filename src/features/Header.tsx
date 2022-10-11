import React from 'react'

import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

export const Header: React.FC = () => (
	<AppBar position="sticky">
		<Typography variant="h1" align="center" sx={{ padding: '1rem' }}>
			Moovy
		</Typography>
	</AppBar>
)
