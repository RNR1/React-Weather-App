import axios from 'axios'

const cities = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
})

export default cities