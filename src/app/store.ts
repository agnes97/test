import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { omdbAPISlice } from './services/omdbAPISlice'
import { listenerMiddleware } from './services/ratingMiddleware'
import ratingSlice from './services/ratingSlice'

const ratingState = JSON.parse(sessionStorage.getItem('ratedMovies') ?? '{}')

export const store = configureStore({
	// See browser devTools here: https://github.com/zalmoxisus/redux-devtools-extension
	devTools: process.env.NODE_ENV === 'development',
	preloadedState: {
		rating: ratingState,
	},
	reducer: {
		rating: ratingSlice,
		[omdbAPISlice.reducerPath]: omdbAPISlice.reducer,
	},
	middleware: getDefautMiddleware =>
		getDefautMiddleware()
			.concat(omdbAPISlice.middleware)
			.concat(listenerMiddleware.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
