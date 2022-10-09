import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { omdbAPISlice } from './services/omdbAPISlice'

export const store = configureStore({
	// See browser devTools here: https://github.com/zalmoxisus/redux-devtools-extension
	devTools: process.env.NODE_ENV === 'development',
	reducer: {
		[omdbAPISlice.reducerPath]: omdbAPISlice.reducer,
	},
	middleware: getDefautMiddleware =>
		getDefautMiddleware().concat(omdbAPISlice.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
