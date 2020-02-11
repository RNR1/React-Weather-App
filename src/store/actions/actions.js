import * as actionTypes from './actionTypes'

export const fetchCities = cities => {
	return { type: actionTypes.FETCH_CITIES, cities}
}

export const fetchCityStart = () => {
  return { type: actionTypes.FETCH_CITY_START }
}

export const fetchCitiesSuccess = cities => {
	return { type: actionTypes.FETCH_CITY_SUCCESS, cities }
}

export const fetchCityFailed = error => {
	return { type: actionTypes.FETCH_CITY_FAILED, error }
}

export const toggleCitySelect = cityName => {
	return { type: actionTypes.TOGGLE_CITY_SELECT, cityName}
}

export const refreshSelectedCities = (cities) => {
	return { type: actionTypes.REFRESH_SELECTED_START, cities }
}

export const refreshSelectedSuccess = (cities) => {
	return { type: actionTypes.REFRESH_SELECTED_SUCCESS, cities}
}