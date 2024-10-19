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
    setWeatherIcon(data[i].icon, icon);

    topDiv.appendChild(createDOMElement('p', `${data[i].date}`));
    weekCards[i].appendChild(topDiv);

    leftDiv.appendChild(icon);
    leftDiv.appendChild(createDOMElement('p', `${data[i].temp}°c`));
    weekCards[i].appendChild(leftDiv);

    rightDiv.appendChild(
      createDOMElement(
        'p',
        `Min: ${data[i].mintemp}°c`,
        'class',
        'cardPropertyDiv',
      ),
    );
    rightDiv.appendChild(
      createDOMElement(
        'p',
        `Max: ${data[i].maxtemp}°c`,
        'class',
        'cardPropertyDiv',
      ),
    );
    rightDiv.appendChild(
      createDOMElement(
        'p',
        `Chance of rain: ${data[i].chanceOfRain}%`,
        'class',
        'cardPropertyDiv',
      ),
    );
    rightDiv.appendChild(
      createDOMElement(
        'p',
        `UV Index: ${data[i].uvindex}`,
        'class',
        'cardPropertyDiv',
      ),
    );
    weekCards[i].appendChild(rightDiv);
  }
}
