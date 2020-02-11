import { useState, useEffect } from 'react'

export default httpClient => {
	const [error, setError] = useState(null)

	const reqInterceptor = httpClient.interceptors.request.use(req => {
		dismissError()
		return req
	})

	const resInterceptor = httpClient.interceptors.response.use(
		res => res,
		error => {
			catchError(error.message)
		}
	)

	useEffect(() => {
		return () => {
			httpClient.interceptors.request.eject(reqInterceptor)
			httpClient.interceptors.response.eject(resInterceptor)
		}
	}, [reqInterceptor, resInterceptor, httpClient.interceptors.request, httpClient.interceptors.response])

	const catchError = err => setError(err)
	const dismissError = () => setError(null)

	
  
  return [error, dismissError] 
}
