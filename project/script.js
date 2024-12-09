<<<<<<< HEAD
const url = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=https%3A%2F%2Fsoundcloud.com%2Fedsheeran';
const apiKey = "my key goes hger"
const data = document.getElementById("info")
const button = document.getElementById("info")
=======
const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=https%3A%2F%2Fsoundcloud.com%2Fedsheeran';
const API_KEY = 'debd88bf4amshf2244f6244ae295p1287a1jsn7557427db93c';

async function searchmusic() {

	const soundcloudURL = document.getElementById('playlistinput').value.trim();
	const button = document.getElementById('search-button');
	const searchButton = document.getElementById('search-button');

    searchButton.addEventListener('click', () => {
}


const url = API_URL;
>>>>>>> 40a8e285b370586a6acd20e4ad3e75f6a3beff6f
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': API_KEY,
		'x-rapidapi-host': 'soundcloud-scraper.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    

	button.addEventListener('click')//test


} catch (error) {
	console.error(error);
}
