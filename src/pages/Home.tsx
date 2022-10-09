import React from 'react'
import { useSearchQuery } from '../app/services/omdbAPISlice'

export const Home: React.FC = () => {
	const { data, isLoading } = useSearchQuery('programmer')

	if (isLoading) return <div>Loading...</div>
	if (!data?.Search?.length) return <div>Missing Movies!</div>

	return (
		<ul>
			{data.Search.map(movie => (
				<li key={movie.imdbID}>{movie.Title}</li>
			))}
		</ul>
	)
}

export default Home
