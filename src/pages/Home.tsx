import React from 'react'

import Container from '@mui/material/Container'

import { SearchForm } from '../features/SearchForm'
import { SearchResultsList } from '../features/SearchResultsList'
import { useLazySearchQuery } from '../app/services/omdbAPISlice'

const startPage = 1

export const Home: React.FC = () => {
	const [search, result, { lastArg }] = useLazySearchQuery()

	return (
		<Container>
			<SearchForm
				onSubmit={({ title, year }) =>
					search({ input: title, year: year, page: startPage })
				}
			/>
			<SearchResultsList
				result={result}
				search={page => search({ ...lastArg, page })}
				initialPage={startPage}
			/>
		</Container>
	)
}

export default Home
