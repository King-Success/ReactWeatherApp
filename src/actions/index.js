import Axios from 'axios';

const API_KEY = '788f0ea15251b5505ea48a7ca1bc0cdd';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},ng`;
  const request = Axios.get(url);

  console.log(request);

  return {
      type: FETCH_WEATHER, 
      payload: request
  }
}