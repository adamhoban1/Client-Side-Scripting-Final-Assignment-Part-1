const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=https%3A%2F%2Fsoundcloud.com%2Fedsheeran';
const API_KEY = 'debd88bf4amshf2244f6244ae295p1287a1jsn7557427db93c';


const url = API_URL;
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

    const soundcloudURL = document.getElementById('playlistinput');
	const button = document.getElementById('search-button');

	button.addEventListener('click')//test


} catch (error) {
	console.error(error);
}
