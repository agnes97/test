import React from 'react'
import { Navigate, useParams } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CircularProgress from '@mui/material/CircularProgress'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { useGetMovieQuery } from '../app/services/omdbAPISlice'

import { useAppSelector } from '../common/hooks'
import { Rating } from '../features/Rating'
import { BottomNav } from '../features/BottomNav'

export const MovieDetail: React.FC = () => {
	const { id } = useParams()
	const ratings = useAppSelector(state => state.rating)

	if (!id) return <Navigate to="/" replace={true} />

	const { data: movie, isLoading } = useGetMovieQuery(id)

	if (isLoading)
		return (
			<Container
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
			>
				<CircularProgress />
			</Container>
		)

	if (!movie) return <Navigate to="/" replace={true} />

	const stringAvatar = (name: string) => ({
		children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
	})

	const { imdbID, Genre, Plot, Poster, Runtime, Title, Year } = movie

	return (
		<Container
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: '1rem',
			}}
		>
			<Card
				elevation={0}
				sx={{
					width: 1,
					display: 'flex',
					flexDirection: {
						xs: 'column',
						md: 'row',
					},
					alignItems: 'center',
				}}
			>
				{Poster === 'N/A' ? (
					<Avatar
						{...stringAvatar(Title)}
						variant="rounded"
						sx={{ width: 200, aspectRatio: '3/4', height: 'inherit' }}
					/>
				) : (
					<CardMedia
						component="img"
						sx={{ width: 200, aspectRatio: '3/4' }}
						image={Poster}
						alt={Title}
					/>
				)}
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '1rem',
						p: '1rem',
					}}
				>
					<Typography variant="h2">{Title}</Typography>
					<Typography>
						{Year} | {Runtime} | {Genre}
					</Typography>
					<Typography sx={{ pt: '1rem' }}>{Plot}</Typography>

					<Rating ratingValue={ratings[imdbID]?.rating} movieId={imdbID} />
				</Box>
			</Card>

			<BottomNav />
		</Container>
	)
}
