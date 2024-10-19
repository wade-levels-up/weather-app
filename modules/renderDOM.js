const currentCardCityName = document.querySelector('.card-city');
const currentCardTemp = document.querySelector('#curTemp');
const currentCardCond = document.querySelector('#curCond');
const currentCardDesc = document.querySelector('#curDesc');
const currentCardMinTemp = document.querySelector('#curMinTemp');
const currentCardMaxTemp = document.querySelector('#curMaxTemp');
const currentCardUVIndex = document.querySelector('#curUVIndex');
const currentCardChanceOfRain = document.querySelector('#curChanceOfRain');
const currentCardMainIcon = document.querySelector('.curMainIcon');

export function revealElement(element) {
  element.style.display = 'flex';
}

export function hideElement(element) {
  element.style.display = 'none';
}

function setWeatherIcon(condition) {
  currentCardMainIcon.className = 'curMainIcon';
  if (condition === 'clear-day' || condition === 'clear-night') {
    currentCardMainIcon.classList.add('sun');
  }
  if (condition === 'fog' || condition === 'cloudy') {
    currentCardMainIcon.classList.add('cloud');
  }
  if (
    condition === 'partly-cloudy-day' ||
    condition === 'partly-cloudy-night'
  ) {
    currentCardMainIcon.classList.add('partly-cloudy');
  }
  if (condition === 'snow') {
    currentCardMainIcon.classList.add('snow');
  }
  if (condition === 'wind') {
    currentCardMainIcon.classList.add('wind');
  }
  if (condition === 'rain') {
    currentCardMainIcon.classList.add('rain');
  }
}

export function populateCurrentWeatherCard(data, unit) {
  currentCardCityName.textContent = data.city;
  currentCardTemp.textContent = `${data.currentTempCelcius}`;
  currentCardCond.textContent = data.curCondition;
  currentCardDesc.textContent = data.longDescription;
  currentCardMinTemp.textContent = `Min: ${data.mintempCelcius}`;
  currentCardMaxTemp.textContent = `Max ${data.maxtempCelcius}`;
  currentCardUVIndex.textContent = `UV Index ${data.curUV}`;
  currentCardChanceOfRain.textContent = `Chance of rain: ${data.chanceOfRain}`;
  setWeatherIcon(data.icon);
}
