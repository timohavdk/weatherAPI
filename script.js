/*async function getForecast() {
	let response = await fetch();
	let data;

	if (response.ok) {
		data = await response.json();
	}
	else {
		console.log(response.status);
		return;
	}
}*/

function submitFunction() {
	event.preventDefault();
	console.log('submited')
}
