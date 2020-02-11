import React from 'react'
import classes from './Checkbox.module.css'

const Checkbox = props => (
	<div className={classes.Container}>
		<label>
			<input className={classes.Hidden} type='checkbox' {...props} />
			<div
				className={classes.Checkbox}
				style={{
					backgroundColor: props.checked ? '#A9CEF4' : 'papayawhip'
				}}>
				<svg
					className={classes.Icon}
					viewBox='0 0 24 24'
					style={{ visibility: props.checked ? 'visible' : 'hidden' }}>
					<polyline points='20 6 9 17 4 12' />
				</svg>
			</div>
		</label>
	</div>
)
export default Checkbox
