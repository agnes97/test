import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit'
import { addRatedMovie } from './ratingSlice'
import type { RootState } from '../store'

export const listenerMiddleware = createListenerMiddleware()
listenerMiddleware.startListening({
	matcher: isAnyOf(addRatedMovie),
	effect: (_, listenerApi) =>
		sessionStorage.setItem(
			'ratedMovies',
			JSON.stringify((listenerApi.getState() as RootState).rating),
		),
})
