import React, { useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import Layout from './hoc/Layout/Layout'
import Cities from './components/Cities/Cities'
import * as actions from './store/actions/actions'

const initCities = [
	'Tel Aviv',
	'Berlin',
	'Thailand',
	'Paris',
	'Amsterdam',
	'New York',
	'Mexico',
	'Vancouver',
	'Miami',
	'Sydney'
]

function App() {
  const dispatch = useDispatch()
	const onFetchCities = useCallback(
		() => dispatch(actions.fetchCities(initCities)),
		[dispatch]
	)

	useEffect(() => {
		onFetchCities()
	}, [onFetchCities])

	return (
		<div>
			<Layout>
				<Cities />
			</Layout>
		</div>
	)
}

export default App
