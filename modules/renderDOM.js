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
  if (condition === 'clear-day' || condition === 'clear-night') {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/sun-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/sun-solid.svg) no-repeat center';
  }
  if (condition === 'fog' || condition === 'cloudy') {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/cloud-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/cloud-solid.svg) no-repeat center';
  }
  if (
    condition === 'partly-cloudy-day' ||
    condition === 'partly-cloudy-night'
  ) {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/cloud-sun-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/cloud-sun-solid.svg) no-repeat center';
  }
  if (condition === 'snow') {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/snowflake-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/snowflake-solid.svg) no-repeat center';
  }
  if (condition === 'wind') {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/wind-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/wind-solid.svg) no-repeat center';
  }
  if (condition === 'rain') {
    currentCardMainIcon.style.webkitMask =
      'url(./icons/cloud-rain-solid.svg) no-repeat center';
    currentCardMainIcon.style.mask =
      'url(./icons/cloud-rain-solid.svg) no-repeat center';
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
