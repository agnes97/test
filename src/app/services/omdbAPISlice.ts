import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface Movie {
	imdbID: string
	Title: string
	Year: string
	Poster: string
}

export interface MovieDetail {
	imdbID: string
	Title: string
	Year: string
	Runtime: string
	Genre: string
	Plot: string
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
		getMovie: builder.query<MovieDetail, string>({
			query: id => ({
				url: '',
				params: {
					apikey,
					i: id,
				},
			}),
		}),
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

export const { useLazySearchQuery, useGetMovieQuery } = omdbAPISlice
