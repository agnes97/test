import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'

import HomeIcon from '@mui/icons-material/Home'

import { useAppSelector } from '../common/hooks'
import { Rating } from '../features/Rating'

export const RatedMovies: React.FC = () => {
	const navigate = useNavigate()
	const ratedMovies = useAppSelector(state => state.rating)

	return (
		<Container>
			<List disablePadding sx={{ width: 1 }}>
				{Object.values(ratedMovies).map(
					({ imdbID, rating, Poster, Title, Year }) => (
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
							<Rating
								ratingValue={rating}
								movie={{ imdbID, Poster, Title, Year }}
							/>
						</ListItem>
					),
				)}
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
