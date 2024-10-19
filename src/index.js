import './style.css';
import {
  returnCurrentWeatherObject,
  returnWeeksWeatherObjects,
} from '../modules/getData';
import {
  revealElement,
  populateCurrentWeatherCard,
  populateWeeksWeatherCards,
} from '../modules/renderDOM';

const form = document.querySelector('#main-form');
const inputCity = document.querySelector('#input-city');
const subscreen = document.querySelector('.subscreen');
const submitButton = document.querySelector('#submit-location-btn');

let todaysWeather;
let weeksWeather;

// async function setTodaysWeather(city) {
//   todaysWeather = await returnCurrentWeatherObject(city);
//   if (todaysWeather) {
//     populateCurrentWeatherCard(todaysWeather);
//     revealElement(subscreen);
//   }
// }

// async function setWeeksWeather(city) {
//   weeksWeather = await returnWeeksWeatherObjects(city);
//   if (weeksWeather) {
//     populateWeeksWeatherCards(weeksWeather);
//     submitButton.textContent = 'See Weather';
//     revealElement(subscreen);
//   }
// }

async function setWeather(city) {
  todaysWeather = await returnCurrentWeatherObject(city);
  weeksWeather = await returnWeeksWeatherObjects(city);
  if (todaysWeather && weeksWeather) {
    populateCurrentWeatherCard(todaysWeather);
    populateWeeksWeatherCards(weeksWeather);
    revealElement(subscreen);
    submitButton.textContent = 'See Weather';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitButton.textContent = 'Loading...';
  setWeather(`${inputCity.value}`);
});
