import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'

import HeartIcon from '@mui/icons-material/Favorite'

export const Header: React.FC = () => (
	<AppBar position="sticky">
		<Toolbar>
			<Typography
				variant="h1"
				align="center"
				sx={{ padding: '1rem', flexGrow: 1 }}
			>
				Moovy
			</Typography>
			<IconButton component={Link} to="/rated">
				<HeartIcon />
			</IconButton>
		</Toolbar>
	</AppBar>
)
