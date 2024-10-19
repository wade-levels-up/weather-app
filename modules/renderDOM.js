import { createDOMElement } from './createDOMEl';

const currentCardCityName = document.querySelector('.card-city');
const currentCardTemp = document.querySelector('#curTemp');
const currentCardCond = document.querySelector('#curCond');
const currentCardDesc = document.querySelector('#curDesc');
const currentCardMinTemp = document.querySelector('#curMinTemp');
const currentCardMaxTemp = document.querySelector('#curMaxTemp');
const currentCardUVIndex = document.querySelector('#curUVIndex');
const currentCardChanceOfRain = document.querySelector('#curChanceOfRain');
const currentCardMainIcon = document.querySelector('.curMainIcon');

const weekCards = Array.from(document.querySelectorAll('.weekcard'));

function processDate(date) {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const splitDateArray = date.split('-');
  const month = months[splitDateArray[1] - 1];
  return `${splitDateArray[2]} - ${month}`;
}

export function revealElement(element) {
  element.style.display = 'flex';
}

export function hideElement(element) {
  element.style.display = 'none';
}

function setWeatherIcon(condition, element) {
  element.className = 'curMainIcon';
  if (condition === 'clear-day' || condition === 'clear-night') {
    element.classList.add('sun');
  }
  if (condition === 'fog' || condition === 'cloudy') {
    element.classList.add('cloud');
  }
  if (
    condition === 'partly-cloudy-day' ||
    condition === 'partly-cloudy-night'
  ) {
    element.classList.add('partly-cloudy');
  }
  if (condition === 'snow') {
    element.classList.add('snow');
  }
  if (condition === 'wind') {
    element.classList.add('wind');
  }
  if (condition === 'rain') {
    element.classList.add('rain');
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
  setWeatherIcon(data.icon, currentCardMainIcon);
}

export function populateWeeksWeatherCards(data, unit) {
  for (let i = 0; i < 7; i += 1) {
    const icon = createDOMElement('div', '', 'class', 'curMainIcon');
    const leftDiv = createDOMElement('div', '', 'class', 'weekcardLeft');
    const rightDiv = createDOMElement('div', '', 'class', 'weekcardRight');
    const topDiv = createDOMElement('div', '', 'class', 'weekcardTop');
    const propertyBoxMintemp = createDOMElement(
      'div',
      '',
      'class',
      'cardPropertyDiv',
    );
    const propertyBoxMaxtemp = createDOMElement(
      'div',
      '',
      'class',
      'cardPropertyDiv',
    );
    const propertyBoxCORain = createDOMElement(
      'div',
      '',
      'class',
      'cardPropertyDiv',
    );
    const propertyBoxUVIndex = createDOMElement(
      'div',
      '',
      'class',
      'cardPropertyDiv',
    );
    const mintemp = createDOMElement('p', `Min: ${data[i].mintemp}°c`);
    const maxtemp = createDOMElement('p', `Max: ${data[i].maxtemp}°c`);
    const corain = createDOMElement(
      'p',
      `Chance of rain: ${data[i].chanceOfRain}%`,
    );
    const uvindex = createDOMElement('p', `UV Index: ${data[i].uvindex}`);

    const minIcon = createDOMElement(
      'span',
      '',
      'class',
      'fa-solid fa-temperature-low',
    );
    const maxIcon = createDOMElement(
      'span',
      '',
      'class',
      'fa-solid fa-temperature-high',
    );
    const corIcon = createDOMElement(
      'span',
      '',
      'class',
      'fa-solid fa-cloud-rain',
    );
    const uvIcon = createDOMElement(
      'span',
      '',
      'class',
      'fa-solid fa-radiation',
    );

    setWeatherIcon(data[i].icon, icon);

    if (i === 0) {
      topDiv.appendChild(createDOMElement('p', `Today`));
    } else {
      topDiv.appendChild(createDOMElement('p', `${processDate(data[i].date)}`));
    }
    weekCards[i].appendChild(topDiv);

    leftDiv.appendChild(icon);
    leftDiv.appendChild(createDOMElement('p', `${data[i].temp}°c`));
    weekCards[i].appendChild(leftDiv);

    propertyBoxMintemp.appendChild(minIcon);
    propertyBoxMintemp.appendChild(mintemp);
    rightDiv.appendChild(propertyBoxMintemp);

    propertyBoxMaxtemp.appendChild(maxIcon);
    propertyBoxMaxtemp.appendChild(maxtemp);
    rightDiv.appendChild(propertyBoxMaxtemp);

    propertyBoxCORain.appendChild(corIcon);
    propertyBoxCORain.appendChild(corain);
    rightDiv.appendChild(propertyBoxCORain);

    propertyBoxUVIndex.appendChild(uvIcon);
    propertyBoxUVIndex.appendChild(uvindex);
    rightDiv.appendChild(propertyBoxUVIndex);

    weekCards[i].appendChild(rightDiv);
  }
}
