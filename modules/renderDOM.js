const currentCardCityName = document.querySelector('.card-city');
const currentCardTemp = document.querySelector('#curTemp');
const currentCardCond = document.querySelector('#curCond');
const currentCardDesc = document.querySelector('#curDesc');
const currentCardMinTemp = document.querySelector('#curMinTemp');
const currentCardMaxTemp = document.querySelector('#curMaxTemp');
const currentCardUVIndex = document.querySelector('#curUVIndex');
const currentCardChanceOfRain = document.querySelector('#curChanceOfRain');

export function revealElement(element) {
  element.style.display = 'flex';
}

export function hideElement(element) {
  element.style.display = 'none';
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
}
