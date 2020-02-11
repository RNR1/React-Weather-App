import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as actions from '../../store/actions/actions'
import City from '../City/City'
import classes from './Cities.module.css'
import Button from '../UI/Button/Button'
import Spinner from '../UI/Spinner/Spinner'

const Cities = React.memo(props => {
	const selectedCities = useSelector(state => state.selectedCities)
	const dispatch = useDispatch()

	const onCheck = cityName => {
		dispatch(actions.toggleCitySelect(cityName))
	}

	const onClick = useCallback(() => {
		dispatch(actions.refreshSelectedCities(selectedCities))
	}, [dispatch, selectedCities])

	const refreshable = useSelector(state => state.selectedCities.length > 0)
	const cities = useSelector(state => state.cities)

	const loading = useSelector(state => state.loading)
	return (
		<div className={classes.Cities}>
			{loading ? (
				<Spinner />
			) : (
				cities.map(c => <City key={c.name} onCheck={onCheck} city={c} />)
			)}
			<Button disabled={!refreshable} onClick={onClick}>
				{loading ? 'REFRESHING' : 'REFRESH'}
			</Button>
		</div>
	)
})

export default Cities
