import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import Container from '@mui/material/Container'

import { SearchForm } from '../features/SearchForm'
import { SearchResultsList } from '../features/SearchResultsList'
import { useLazySearchQuery } from '../app/services/omdbAPISlice'

const startPage = 1

export const Home: React.FC = () => {
	const [search, result, { lastArg }] = useLazySearchQuery()
	const [searchParams, setSearchParams] = useSearchParams()

	const currentPage = Number(searchParams.get('page'))

	useEffect(() => {
		const input = searchParams.get('input')
		const year = searchParams.get('year') ?? ''

		if (!input) return

		search({ input, year, page: isNaN(currentPage) ? startPage : currentPage })
	}, [searchParams, currentPage])

	return (
		<Container
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<SearchForm
				prevSearchParams={{
					title: searchParams.get('input') ?? '',
					year: searchParams.get('year') ?? '',
				}}
				onSubmit={({ title, year }) => {
					setSearchParams({
						input: title,
						year: year,
						page: startPage.toString(),
					})
					search({ input: title, year: year, page: startPage })
				}}
			/>
			<SearchResultsList
				result={result}
				search={page => {
					setSearchParams({ ...lastArg, page: page.toString() })
					search({ ...lastArg, page })
				}}
				initialPage={isNaN(currentPage) ? startPage : currentPage}
			/>
		</Container>
	)
}
