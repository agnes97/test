import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Movie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
}

export interface MovieSearch {
	Search: Movie[]
	totalResults: string
}

const baseUrl = `http://www.omdbapi.com/`
const apikey = process.env.REACT_APP_OMDB_API_KEY

export const omdbAPISlice = createApi({
	reducerPath: 'omdbAPI',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		search: builder.query<
			MovieSearch,
			{ input: string; year: string; page: number }
		>({
			query: ({ input, year, page }) => ({
				url: '',
				params: {
					apikey,
					s: input,
					year,
					page,
				},
			}),
		}),
	}),
})

export const { useLazySearchQuery } = omdbAPISlice
