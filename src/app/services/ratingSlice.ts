import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MovieDetail } from './omdbAPISlice'

export interface MovieWithRating extends MovieDetail {
	rating: number
}

const initialState: Record<string, MovieWithRating> = {}

const ratingSlice = createSlice({
	name: 'rating',
	initialState,
	reducers: {
		addRatedMovie(
			state: Record<string, MovieWithRating>,
			action: PayloadAction<MovieWithRating>,
		) {
			return { ...state, [action.payload.imdbID]: action.payload }
		},
	},
})

export const { addRatedMovie } = ratingSlice.actions

export default ratingSlice.reducer
