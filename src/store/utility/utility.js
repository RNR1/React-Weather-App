import cities from '../../axios-cities'
const key = process.env.REACT_APP_API_KEY

export const fetchCity = cityName => {
	const path = `/weather?q=${cityName}&units=metric&appid=${key}`
	return cities.get(path)
}

export const fetchCities = async cities => {
	const fetchedCities = []
	for (let c = 0; c < cities.length; c++) {
		let city = await fetchCity(cities[c])
		city = processCityData(city.data)
		fetchedCities.push(city)
	}
	return fetchedCities
}
export const processCityData = city => {
	return {
		name: city.name,
		temperature: parseInt(city.main.temp),
		condition: city.weather[0].main,
		conditionPic: city.weather[0].icon,
		checked: false
	}
}

export const refreshCitiesProcessor = async cities => {
	const processedCities = []
	for (let c = 0; c < cities.length; c++) {
		let city = await fetchCity(cities[c])
		city = processCityData(city.data)
		processedCities.push(city)
	}
	return processedCities
}

