import React from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import HomeIcon from '@mui/icons-material/Home'

import { useGetMovieQuery } from '../app/services/omdbAPISlice'

export const MovieDetail: React.FC = () => {
	const { id } = useParams()

	if (!id) return <Navigate to="/" replace={true} />

	const { data, isLoading } = useGetMovieQuery(id)

	if (isLoading)
		return (
			<Container
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<CircularProgress />
			</Container>
		)

	if (!data) return <Navigate to="/" replace={true} />

	const stringAvatar = (name: string) => ({
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	})

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '1rem',
			}}
		>
			<Card elevation={0} sx={{ width: 1, display: 'flex' }}>
				{data.Poster === 'N/A' ? (
					<Avatar
						{...stringAvatar(data.Title)}
						variant="rounded"
						sx={{ width: 200, aspectRatio: '3/4', height: 'inherit' }}
					/>
				) : (
					<CardMedia
						component="img"
						sx={{ width: 200, aspectRatio: '3/4' }}
						image={data.Poster}
						alt={data.Title}
					/>
				)}
				<Box sx={{ padding: '1rem' }}>
					<Typography variant="h2">{data.Title}</Typography>
					<Typography>
						{data.Year} | {data.Runtime} | {data.Genre}
					</Typography>
					<Typography sx={{ pt: '1rem' }}>{data.Plot}</Typography>
				</Box>
			</Card>
			<Button
				component={Link}
				to="/"
				fullWidth
				size="large"
				color="primary"
				startIcon={<HomeIcon />}
				sx={{ padding: '1rem' }}
			>
				NEW SEARCH
			</Button>
		</Container>
	)
}
