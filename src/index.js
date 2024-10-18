import './style.css';
import {
  returnCurrentWeatherObject,
  returnWeeksWeatherObjects,
} from '../modules/getData';

const form = document.querySelector('#main-form');
const inputCity = document.querySelector('#input-city');

let todaysWeather;
// let weeksWeather = await returnWeeksWeatherObjects('melbourne');
// console.table(todaysWeather);
// console.log(weeksWeather);

async function setTodaysWeather(city) {
  todaysWeather = await returnCurrentWeatherObject(city);
  console.table(todaysWeather);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  setTodaysWeather(`${inputCity.value}`);
});
