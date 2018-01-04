import axios from 'axios';
const API_KEY = '2703803d417323ff17b6a5bfaf33ca23';
const ROOT_URL=`https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=${API_KEY}`; 
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function WeatherFetch(city)
{
    const url =`${ROOT_URL}&q=${city},in`;
    const request = axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    };
}