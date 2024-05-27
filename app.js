fetch('json/countries.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch countries');
        }
        return response.json();
    })
    .then(countries => {
        const datalistCountries = document.getElementById('countries');

        // Iterate over the countries and add options to the datalist
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.name;
            datalistCountries.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching countries:', error);
    });


fetch('json/states.json') // Assuming the JSON file is in the 'json' folder
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch states');
        }
        return response.json();
    })
    .then(states => {
        const datalistStates = document.getElementById('states');

        // Iterate over the states and add options to the datalist
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.name;
            datalistStates.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching states:', error);
    });

fetch('json/cities.json') // Assuming the JSON file is in the 'json' folder
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch cities');
        }
        return response.json();
    })
    .then(cities => {
        const datalistCities = document.getElementById('cities');

        // Populate the datalist for cities
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.name;
            datalistCities.appendChild(option);
            console.log(option);
        });
    })
    .catch(error => {
        console.error('Error fetching cities:', error);
    });
