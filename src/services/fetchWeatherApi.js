const API_KEY = '&appid=7a2ea2da378bcbb457659677153c5621';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=';
const API_METRIC = '&units=metric';

const city = 'Lublin';

export const fetchWeatherApi = () => {
	const URL = `${API_URL}${city}${API_KEY}${API_METRIC}`;

	return fetch(URL).then((response) => {
		if (!response.ok) throw new Error(response.status);
		else return response.json();
	});
};
