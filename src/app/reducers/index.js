import { combineReducers } from 'redux';
import WeatherFetch from './reducer_fetch_weather';
const rootReducer = combineReducers({
    weather:WeatherFetch
});

export default rootReducer;