import GoodWeather from '../assets/good-weather.jpg'
import BadWeather from '../assets/bad-weather.jpg'

export const getConditionBackground = temp => temp > 20 ? GoodWeather : BadWeather

export const getConditionIcon = pic => `//openweathermap.org/img/wn/${pic}.png`

export const updateSelectedCities = checked => {
  if (checked) {
    
  }
}