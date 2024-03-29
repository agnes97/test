import React, { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Avatar from '@mui/material/Avatar'
import CircularProgress from '@mui/material/CircularProgress'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import Pagination from '@mui/material/Pagination'

import type { Movie, MovieSearch } from '../app/services/omdbAPISlice'

import { Rating } from './Rating'
import { useAppSelector } from '../common/hooks'

interface Props {
	result: {
		data?: MovieSearch
		isLoading: boolean
		isFetching: boolean
		isUninitialized: boolean
	}
	search: (page: number) => void
	initialPage: number
}

export const SearchResultsList: React.FC<Props> = ({
	result: { data, isLoading, isFetching, isUninitialized },
	search,
	initialPage,
}) => {
	const navigate = useNavigate()
	const [page, setPage] = useState(initialPage)
	const ratings = useAppSelector(state => state.rating)

	const handlePageChange = (
		changeEvent: ChangeEvent<unknown>,
		nextPageNumber: number,
	) => {
		changeEvent.preventDefault()

		setPage(nextPageNumber)
		search(nextPageNumber)
	}

	if (isUninitialized) return null
	if (isLoading || isFetching) return <CircularProgress />
	if (!data?.Search?.length) return <div>Missing Movies!</div>

	const listItems: Movie[] = data.Search

	const totalNumberOfPages = Math.ceil(Number(data.totalResults) / 10)

	return (
		<List disablePadding sx={{ width: 1 }}>
			{listItems.map(({ imdbID, Poster, Title, Year }) => (
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
					<Rating ratingValue={ratings[imdbID]?.rating} movieId={imdbID} />
				</ListItem>
			))}
			<Pagination
				shape="rounded"
				variant="outlined"
				page={page}
				onChange={handlePageChange}
				count={totalNumberOfPages}
				sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
			/>
		</List>
	)
}
