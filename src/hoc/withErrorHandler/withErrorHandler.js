import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import useErrorHandler from '../../hooks/errorHandler'
const withErrorHandler = (WrappedComponent, axios) => {
	return props => {
		
		const [error, dismissError] = useErrorHandler(axios)

		return (
			<React.Fragment>
				<Modal show={error} modalClose={dismissError}>
					{error}
				</Modal>
				<WrappedComponent {...props} />
			</React.Fragment>
		)
	}
}

export default withErrorHandler
