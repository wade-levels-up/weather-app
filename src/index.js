import './style.css';
import {
  returnCurrentWeatherObject,
  returnWeeksWeatherObjects,
} from '../modules/getData';
import {
  revealElement,
  hideElement,
  populateCurrentWeatherCard,
  populateWeeksWeatherCards,
} from '../modules/renderDOM';

const form = document.querySelector('#main-form');
const inputCity = document.querySelector('#input-city');
const subscreen = document.querySelector('.subscreen');
const submitButton = document.querySelector('#submit-location-btn');
const errorModal = document.querySelector('.error');
const errorCloseBtn = document.querySelector('.error button');

errorCloseBtn.addEventListener('click', () => {
  hideElement(errorModal);
});

let todaysWeather;
let weeksWeather;

async function setWeather(city) {
  try {
    todaysWeather = await returnCurrentWeatherObject(city);
    weeksWeather = await returnWeeksWeatherObjects(city);
    if (todaysWeather && weeksWeather) {
      populateCurrentWeatherCard(todaysWeather);
      populateWeeksWeatherCards(weeksWeather);
      revealElement(subscreen);
      submitButton.textContent = 'See Weather';
    }
  } catch (error) {
    revealElement(errorModal);
    hideElement(subscreen);
    console.error('There was an issue fetching the weather data');
    submitButton.textContent = 'See Weather';
    inputCity.value = '';
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitButton.textContent = 'Loading...';
  setWeather(`${inputCity.value}`);
});
