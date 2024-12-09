const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=';
const API_KEY = 'debd88bf4amshf2244f6244ae295p1287a1jsn7557427db93c';


async function searchmusic(userURL) {
	try{
		const response = await fetch(`${API_URL}${encodeURIComponent(userURL)}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'soundcloud-scraper.p.rapidapi.com'
            }
        });
		console.log(response)

	}
	catch (error) {
        const Info = document.getElementById('info');
        Info.innerHTML = `<p>Error: ${error.message}</p>`;
	}

	
	

}

(function (){
	const searchButton = document.getElementById('search-button');
	const soundCloudURL = document.getElementById('playlistinput');
	searchButton.addEventListener('click', () => {
		const userURL = soundCloudURL.value.trim();
		if (!userURL) {
            throw new Error(`Please enter a SoundCloud user URL`);
			return;
        }
		searchmusic(userURL);
    });

})();

   


