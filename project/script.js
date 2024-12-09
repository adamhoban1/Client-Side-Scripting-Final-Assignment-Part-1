const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/tracks?user=https%3A%2F%2Fsoundcloud.com%2Fedsheeran';
const API_KEY = 'debd88bf4amshf2244f6244ae295p1287a1jsn7557427db93c';
const searchButton = document.getElementById('search-button');

async function searchmusic() {
	searchButton.addEventListener('click', () => {
		const soundCloudURL = document.getElementById('playlistinput').value.trim();
		if (!soundCloudURL) {
            throw new Error(`Please enter a SoundCloud user URL`);
			return;
        }
	});

}

   


