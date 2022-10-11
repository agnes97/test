import React from 'react'

import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MUIRating from '@mui/material/Rating'

import { useAppDispatch } from '../common/hooks'
import { addRatedMovie } from '../app/services/ratingSlice'
import { Movie } from '../app/services/omdbAPISlice'

interface RatingProps {
	movie: Movie
	ratingValue?: number
}

export const Rating: React.FC<RatingProps> = ({ movie, ratingValue }) => {
	const dispatch = useAppDispatch()

	return (
		<MUIRating
			value={ratingValue ?? 0}
			precision={0.5}
			icon={<FavoriteIcon fontSize="inherit" />}
			emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			onChange={(_, value) => {
				dispatch(addRatedMovie({ ...movie, rating: value ?? 0 }))
			}}
		/>
	)
}
