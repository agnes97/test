import React, { useState } from 'react'

import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import SearchIcon from '@mui/icons-material/Search'

interface SearchInput {
	title: string
	year: string
}

interface Props {
	prevSearchParams: SearchInput
	onSubmit: (input: SearchInput) => void
}

export const SearchForm: React.FC<Props> = ({ onSubmit, prevSearchParams }) => {
	const [formData, setFormData] = useState<SearchInput>(prevSearchParams)

	const handleInputChange = (
		inputEvent: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const { name, value } = inputEvent.target

		setFormData(previousFormData => ({
			...previousFormData,
			[name]: value.toLocaleString(),
		}))
	}

	return (
		<Paper
			id="search"
			component="form"
			onSubmit={event => {
				event.preventDefault()

				onSubmit(formData)
			}}
			variant="outlined"
			sx={{
				width: '100%',
				display: 'flex',
				flexDirection: {
					xs: 'column',
					md: 'row',
				},
				justifyContent: 'center',
				gap: '1rem',
				padding: '1rem',
			}}
		>
			<TextField
				name="title"
				value={formData.title}
				onChange={handleInputChange}
				label="MOVIE TITLE"
				placeholder="The Movie"
				variant="filled"
				sx={{ flexGrow: 1 }}
			/>
			<TextField
				name="year"
				value={formData.year}
				onChange={handleInputChange}
				label="YEAR"
				placeholder="2022"
				variant="filled"
			/>
			<Button
				type="submit"
				form="search"
				variant="contained"
				endIcon={<SearchIcon />}
			>
				SEARCH
			</Button>
		</Paper>
	)
}
