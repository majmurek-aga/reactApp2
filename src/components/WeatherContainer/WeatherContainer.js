import { useEffect, useState } from 'react';
import { fetchWeatherApi } from '../../services/fetchWeatherApi';
import { defaultWeatherData } from '../../data/defaultData';
import './WeatherContainer.css';
import weatherImage from '../../assets/images/unknown.png';

const WeatherContainer = () => {
	const [weather, setWeather] = useState(defaultWeatherData);

	useEffect(() => {
		fetchWeatherApi().then((data) => {
			setWeather(data);
		});
	});

	return (
		<div className='container'>
			<img src={weatherImage} alt='weatherImage' />
			<h2>
				Dane dla <span className='value'>{weather.name}</span>
			</h2>
			<p>
				Temperatura: <span className='value'>{weather.main.temp}</span>
			</p>
			<p>
				Wilgotność powietrza: <span className='value'>{weather.main.humidity}</span>
			</p>
			<p>
				Ciśnienie: <span className='value'>{weather.main.pressure}</span>
			</p>
			<p>
				Pogoda ogólnie:<span className='value'>{weather.weather[0].description}</span>
			</p>
		</div>
	);
};

export default WeatherContainer;
