async function getWeatherData(cityName) {
  const data = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&elements=datetime%2CdatetimeEpoch%2Cname%2Ctempmax%2Ctempmin%2Ctemp%2Chumidity%2Cprecipprob%2Cuvindex%2Csunrise%2Csunset%2Cmoonphase%2Cconditions%2Cdescription%2Cicon&key=8E32DPMRNWDWVYMCLXSCYWDBC&contentType=json`,
    { mode: 'cors' },
  );
  return data;
}

async function makeWeatherDataJSON(cityName) {
  const rawData = await getWeatherData(cityName);
  const processedData = await rawData.json();
  return processedData;
}

async function setWeatherData(cityName) {
  const data = await makeWeatherDataJSON(cityName);
  return data;
}

export async function returnCurrentWeatherObject(cityName) {
  const data = await setWeatherData(cityName);
  const currentWeatherObject = {
    city: data.resolvedAddress,
    currentTempCelcius: `${data.currentConditions.temp}°c`,
    currentTempFahrenheit: `${(data.currentConditions.temp * 9) / 5 + 32}°f`,
    mintempCelcius: `${data.days[0].tempmin}°c`,
    maxtempCelcius: `${data.days[0].tempmax}°c`,
    mintempFahrenheit: `${(data.days[0].tempmin * 9) / 5 + 32}°f`,
    maxtempFahrenheit: `${(data.days[0].tempmax * 9) / 5 + 32}°f`,
    curUV: data.currentConditions.uvindex,
    curCondition: data.currentConditions.conditions,
    longDescription: data.description,
    chanceOfRain: `${data.currentConditions.precipprob}%`,
  };
  return currentWeatherObject;
}

export async function returnWeeksWeatherObjects(cityName) {
  const data = await setWeatherData(cityName);
  const weekLength = 8;
  const weeksWeatherArray = [];
  for (let i = 0; i < weekLength; i += 1) {
    weeksWeatherArray.push({
      city: `${data.resolvedAddress}`,
      date: `${data.days[i].datetime}`,
      maxtemp: `${data.days[i].tempmax}`,
      chanceOfRain: `${data.days[i].precipprob}`,
      uvindex: `${data.days[i].uvindex}`,
    });
  }
  return weeksWeatherArray;
}
