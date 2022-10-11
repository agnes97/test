import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import HomeIcon from '@mui/icons-material/Home'

import { useAppSelector } from '../common/hooks'
import { Rating } from '../features/Rating'
import type { MovieDetail } from '../app/services/omdbAPISlice'

export const RatedMovies: React.FC = () => {
	const navigate = useNavigate()
	const [currentFilter, setCurrentFilter] = useState<string | null>(null)
	const ratedMovies = useAppSelector(state => Object.values(state.rating))

	if (!ratedMovies.length)
		return (
			<Container>
				<Typography align="center">You have no rated movies! :(</Typography>
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

	const filteredMovies = useMemo(() => {
		if (!currentFilter) return ratedMovies

		return ratedMovies.filter((movie: MovieDetail) => {
			return movie.Genre.includes(currentFilter)
		})
	}, [currentFilter, ratedMovies])

	const movieGenres = useMemo(() => {
		const genres = ratedMovies.flatMap(movie =>
			movie.Genre.split(',').map(genre => genre.trim()),
		)

		const uniqueGenres = new Set(genres)

		return Array.from(uniqueGenres).sort()
	}, [ratedMovies])

	return (
		<Container>
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'center',
					flexWrap: 'wrap',
				}}
			>
				<Typography fontWeight={700} px="0.5rem">
					FILTER BY GENRE:
				</Typography>
				<List
					component={Stack}
					spacing={1}
					direction="row"
					divider={<Divider orientation="vertical" flexItem />}
					sx={{
						display: 'flex',
						justifyContent: 'center',
						flexWrap: 'wrap',
					}}
				>
					{movieGenres.map((genre, index) => (
						<Button
							key={index}
							onClick={event => setCurrentFilter(event.currentTarget.value)}
							value={genre}
						>
							{genre}
						</Button>
					))}
					<Button variant="outlined" onClick={() => setCurrentFilter(null)}>
						RETURN ALL
					</Button>
				</List>
			</Box>

			<List disablePadding sx={{ width: 1 }}>
				{filteredMovies.map(({ imdbID, rating, Poster, Title, Year }) => (
					<ListItem
						key={imdbID}
						divider
						disablePadding
						sx={{
							display: 'flex',
							flexDirection: {
								xs: 'column',
								md: 'row',
							},
							padding: '1rem',
						}}
					>
						<ListItemButton
							onClick={() => navigate(`/${imdbID}`)}
							sx={{
								display: 'flex',
								flexDirection: {
									xs: 'column',
									md: 'row',
								},
							}}
						>
							<ListItemAvatar>
								<Avatar
									alt={Title}
									src={Poster}
									variant="rounded"
									sx={{
										height: '100%',
										aspectRatio: '3/4',
									}}
								/>
							</ListItemAvatar>
							<ListItemText id={imdbID} primary={Title} secondary={Year} />
						</ListItemButton>
						<Rating ratingValue={rating} movieId={imdbID} />
					</ListItem>
				))}
			</List>
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
