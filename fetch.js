const countryInput = document.getElementById('countryInput');
const customDropdown = document.getElementById('customDropdown');
let countries;

function populateDropdown(countries) {
    customDropdown.innerHTML = '';
    countries.forEach(country => {
        const option = document.createElement('div');
        option.classList.add('custom-dropdown-item');
        option.textContent = country.name;
        option.addEventListener('click', () => {
            countryInput.value = country.name;
            customDropdown.style.display = 'none';
        });
        customDropdown.appendChild(option);
    });
    customDropdown.style.display = countries.length ? 'block' : 'none';
}

countryInput.addEventListener('focus', function () {
    if (!countries) {
        fetch('json/countries.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch countries');
                }
                return response.json();
            })
            .then(data => {
                countries = data.map(country => ({
                    id: country.id,
                    name: country.name
                }));
                populateDropdown(countries);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }

    customDropdown.style.display = 'block';
});

countryInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const filteredCountries = countries.filter(country => country.name.toLowerCase().includes(searchText));
    populateDropdown(filteredCountries);
});


const stateInput = document.getElementById('stateInput');
const customStateDropdown = document.getElementById('customStateDropdown');
let states;

function populateStateDropdown(states) {
    customStateDropdown.innerHTML = '';
    states.forEach(state => {
        const option = document.createElement('div');
        option.classList.add('custom-dropdown-item');
        option.textContent = state.name;
        option.addEventListener('click', () => {
            stateInput.value = state.name;
            customStateDropdown.style.display = 'none';
        });
        customStateDropdown.appendChild(option);
    });
    customStateDropdown.style.display = states.length ? 'block' : 'none';
}

stateInput.addEventListener('focus', function () {
    if (!states) {
        fetch('json/states.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch states');
                }
                return response.json();
            })
            .then(data => {
                states = data.map(state => ({
                    id: state.id,
                    name: state.name
                }));
                populateStateDropdown(states);
            })
            .catch(error => console.error('Error fetching states:', error));
    }

    customStateDropdown.style.display = 'block';
});

const cityInput = document.getElementById('cityInput');
const customCityDropdown = document.getElementById('customCityDropdown');
let cities;

function populateCityDropdown(cities) {
    customCityDropdown.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('div');
        option.classList.add('custom-dropdown-item');
        option.textContent = city.name;
        option.addEventListener('click', () => {
            cityInput.value = city.name;
            customCityDropdown.style.display = 'none';
        });
        customCityDropdown.appendChild(option);
    });
    customCityDropdown.style.display = cities.length ? 'block' : 'none';
}

cityInput.addEventListener('focus', function () {
    if (!cities) {
        fetch('json/cities.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch cities');
                }
                return response.json();
            })
            .then(data => {
                cities = data.map(city => ({
                    id: city.id,
                    name: city.name
                }));
                populateCityDropdown(cities);
            })
            .catch(error => console.error('Error fetching cities:', error));
    }

    customCityDropdown.style.display = 'block';
});

cityInput.addEventListener('input', function () {
    const searchText = this.value.toLowerCase();
    const filteredCities = cities.filter(city => city.name.toLowerCase().includes(searchText));
    populateCityDropdown(filteredCities);
});


function handleClickOutside(event, dropdown, inputField) {
    if (!dropdown.contains(event.target) && event.target !== inputField) {
        dropdown.style.display = 'none';
    }
}

document.body.addEventListener('click', function(event) {
    handleClickOutside(event, customDropdown, countryInput);
});

document.body.addEventListener('click', function(event) {
    handleClickOutside(event, customStateDropdown, stateInput);
});

document.body.addEventListener('click', function(event) {
    handleClickOutside(event, customCityDropdown, cityInput);
});
