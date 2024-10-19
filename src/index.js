import './style.css';
import {
  returnCurrentWeatherObject,
  returnWeeksWeatherObjects,
} from '../modules/getData';

const form = document.querySelector('#main-form');
const inputCity = document.querySelector('#input-city');

let todaysWeather;
let weeksWeather;

async function setTodaysWeather(city) {
  todaysWeather = await returnCurrentWeatherObject(city);
  console.table(todaysWeather);
}

async function setWeeksWeather(city) {
  weeksWeather = await returnWeeksWeatherObjects(city);
  console.table(weeksWeather);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('retrieving data...');
  setTodaysWeather(`${inputCity.value}`);
  setWeeksWeather(`${inputCity.value}`);
});
