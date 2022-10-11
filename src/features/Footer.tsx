import React from 'react'

import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

export const Footer: React.FC = () => (
	<AppBar position="static" elevation={0} component="footer">
		<Toolbar style={{ justifyContent: 'center' }}>
			<Typography variant="caption">©2022 Jana Chaloupková</Typography>
		</Toolbar>
	</AppBar>
)
