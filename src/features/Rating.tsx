import React from 'react'

import CircularProgress from '@mui/material/CircularProgress'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MUIRating from '@mui/material/Rating'

import { useAppDispatch } from '../common/hooks'
import { addRatedMovie } from '../app/services/ratingSlice'
import { useLazyGetMovieQuery } from '../app/services/omdbAPISlice'

interface RatingProps {
	movieId: string
	ratingValue?: number
}

export const Rating: React.FC<RatingProps> = ({ movieId, ratingValue }) => {
	const dispatch = useAppDispatch()
	const [getMovie, { isLoading, isUninitialized }] = useLazyGetMovieQuery()

	if (!isUninitialized && isLoading) return <CircularProgress />

	return (
		<MUIRating
			value={ratingValue ?? 0}
			precision={0.5}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			onChange={(_, value) => {
				getMovie(movieId, true).then(({ data: movie }) => {
					if (!movie) throw new Error("This movie couldn't be rated!")

					dispatch(addRatedMovie({ ...movie, rating: value ?? 0 }))
				})
			}}
		/>
	)
}
