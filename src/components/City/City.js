import React, { useCallback } from 'react'
import classes from './City.module.css'
import * as helpers from '../../helpers/helpers'
import Checkbox from '../UI/Checkbox/Checkbox'

const City = props => {	
	const {onCheck} = props
	const {name} = props.city
	const checkHandler = useCallback((e) => {
		onCheck(name)
	}, [onCheck, name])

	const condition = `url(${helpers.getConditionBackground(
		props.city.temperature
	)})`

	return (
		<div
			className={classes.City}
			style={{
				backgroundImage: condition 
			}}>
			<Checkbox checked={props.city.checked} onChange={checkHandler} />
			<p>{props.city.name}</p>
			<p>{props.city.temperature}°</p>
			<p>{props.city.condition}</p>
			<img
				src={helpers.getConditionIcon(props.city.conditionPic)}
				alt={props.city.condition}
			/>
		</div>
	)
}

export default React.memo(City)
