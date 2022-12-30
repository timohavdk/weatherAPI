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
	this.country      = country;
	this.localTime    = localtime;
	this.tempC        = temp_c;
	this.tempF        = temp_f;
	this.forecastIcon = iconSrc;

	this.template = `
			<p>Temperature Сelsius: ${this.tempC}</p>	
			<p>Temperature Fahrenheit: ${this.tempF}</p>
			<img src="${this.forecastIcon}">
			`;

	this.getTemplate = function() {
		console.log(this.template);
		return this.template;
	}
}

async function submitFunction(event) {
	event.preventDefault();
	const city = document.getElementById('city');
	if ('' !== city.value) {
		const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=eb9097d015f74084b5c234047222812&q=${city.value}&aqi=no`);
		const result   = await response.json();
		console.log(result);
		const template      = new getForecastTemp(
			result.current.temp_c,
			result.current.temp_f,
			result.current.condition.icon,
		);
		const container     = document.querySelector('.forecast__current');
		container.innerHTML = template.getTemplate();
	}
}

const button = document.getElementById('button');
button.addEventListener('click', submitFunction);
