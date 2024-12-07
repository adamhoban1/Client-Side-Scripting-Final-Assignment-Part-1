const url = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=https%3A%2F%2Fsoundcloud.com%2Fedsheeran';
const apiKey = "my key goes hger"
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'debd88bf4amshf2244f6244ae295p1287a1jsn7557427db93c',
		'x-rapidapi-host': 'soundcloud-scraper.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);

    const soundcloudURL = document.getElementById('playlistinput');
	const button = document.getElementById('search-button');

	button.addEventListener('click'){
		
	}
} catch (error) {
	console.error(error);
}
