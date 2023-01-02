function getForecastTemp(
    country,
    localtime,
    temp_c,
    temp_f,
    iconSrc,
    feelslike_c,
    feelslike_f,
    windSpeed_kph,
    windSpeed_mph,
) {
    this.country = country;
    this.localTime = localtime;
    this.tempC = temp_c;
    this.tempF = temp_f;
    this.forecastIcon = iconSrc;
    this.feelslikeC = feelslike_c;
    this.feelslikeF = feelslike_f;
    this.windSpeedKph = windSpeed_kph;
    this.windSpeedMph = windSpeed_mph;

    this.template = `
			<div class="forecast__country">
				<p>Country: ${this.country}</p>
				<p>Local time: ${this.localTime}</p>
			</div>
			<div class="forecast__information">
				<div class="forecast__weather">
				<p>Temperature Сelsius: ${this.tempC}</p>	
					<p>Temperature Fahrenheit: ${this.tempF}</p>
					<p>Feels like (celsius): ${this.feelslikeC}</p>
					<p>Feels like (fahrenheit): ${this.feelslikeF}</p>
					<p>Wind speed (km/h): ${this.windSpeedKph}</p>
					<p>Wind speed (m/h): ${this.windSpeedMph}</p>
				</div>
				<div class="forecast__icon">
					<img src="${this.forecastIcon}">
				</div>
			</div>
			`;

    this.getTemplate = function () {
        console.log(this.template);
        return this.template;
    }
}

async function submitFunction(event) {
    event.preventDefault();
    const city = document.getElementById('city');
    if ('' !== city.value) {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb9097d015f74084b5c234047222812&q=${city.value}&aqi=no`);
        const result = await response.json();
        console.log(result);
        const template = new getForecastTemp(
            result.location.country,
            result.location.localtime,
            result.current.temp_c,
            result.current.temp_f,
            result.current.condition.icon,
            result.current.feelslike_c,
            result.current.feelslike_f,
            result.current.wind_kph,
            result.current.wind_mph,
        );
        const container = document.querySelector('.forecast__current');
        container.innerHTML = template.getTemplate();
    }
}

const button = document.getElementById('button');
button.addEventListener('click', submitFunction);
