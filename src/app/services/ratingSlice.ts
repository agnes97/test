import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Movie } from './omdbAPISlice'

export interface MovieWithRating extends Movie {
	rating: number
}

const initialState: MovieWithRating[] = []

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		addRatedMovie(
			state: MovieWithRating[],
			action: PayloadAction<MovieWithRating>,
		) {
			return [...state, action.payload]
		},
	},
})

export const { addRatedMovie } = ratingSlice.actions

export default ratingSlice.reducer
