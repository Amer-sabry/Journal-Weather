const form = document.querySelector('#weather-form');
const cityInput = document.querySelector('#city');
const descriptionInput = document.querySelector('#description');
const temperatureInput = document.querySelector('#temperature');
const entryList = document.querySelector('#entry-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const city = cityInput.value;
  const description = descriptionInput.value;
  const temperature = temperatureInput.value;

  const entry = document.createElement('li');
  entry.classList.add('entry');
  entry.innerHTML = `
    <h3>${city}</h3>
    <p>${description}</p>
    <p>Temperature: ${temperature}°C</p>
  `;
  entryList.appendChild(entry);

  cityInput.value = '';
  descriptionInput.value = '';
  temperatureInput.value = '';
});
