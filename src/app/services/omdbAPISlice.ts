import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Movie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
}

interface MovieSearch {
	Search: Movie[]
}

const baseUrl = `http://www.omdbapi.com/`
const apikey = process.env.REACT_APP_OMDB_API_KEY

export const omdbAPISlice = createApi({
	reducerPath: 'omdbAPI',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: builder => ({
		search: builder.query<MovieSearch, string>({
			query: input => ({
				url: '',
				params: {
					apikey,
					s: input,
				},
			}),
		}),
	}),
})

export const { useSearchQuery } = omdbAPISlice
