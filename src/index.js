import './style.css';
import {
  returnCurrentWeatherObject,
  returnWeeksWeatherObjects,
  setWeatherData,
} from '../modules/getData';
import {
  revealElement,
  populateCurrentWeatherCard,
  populateWeeksWeatherCards,
} from '../modules/renderDOM';

const form = document.querySelector('#main-form');
const inputCity = document.querySelector('#input-city');
const subscreen = document.querySelector('.subscreen');

let todaysWeather;
let weeksWeather;

async function setTodaysWeather(city) {
  todaysWeather = await returnCurrentWeatherObject(city);
  console.table(todaysWeather);
  populateCurrentWeatherCard(todaysWeather);
}

async function setWeeksWeather(city) {
  weeksWeather = await returnWeeksWeatherObjects(city);
  console.table(weeksWeather);
  populateWeeksWeatherCards(weeksWeather);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('retrieving data...');
  setTodaysWeather(`${inputCity.value}`);
  setWeeksWeather(`${inputCity.value}`);
  revealElement(subscreen);
});

console.log(await setWeatherData('mildura'));
setTodaysWeather(`Mildura`);
setWeeksWeather(`Mildura`);
revealElement(subscreen);
