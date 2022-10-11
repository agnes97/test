import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'

import HomeIcon from '@mui/icons-material/Home'
import HistoryIcon from '@mui/icons-material/History'

export const BottomNav: React.FC = () => {
	const navigate = useNavigate()

	return (
		<List
			component={Stack}
			direction="row"
			sx={{
				display: 'flex',
				justifyContent: 'center',
				flexWrap: 'wrap',
			}}
		>
			<Button
				onClick={() => navigate(-1)}
				size="large"
				color="primary"
				startIcon={<HistoryIcon />}
				sx={{ padding: '1rem' }}
			>
				GO BACK
			</Button>
			<Button
				component={Link}
				to="/"
				size="large"
				color="primary"
				startIcon={<HomeIcon />}
				sx={{ padding: '1rem' }}
			>
				NEW SEARCH
			</Button>
		</List>
	)
}
