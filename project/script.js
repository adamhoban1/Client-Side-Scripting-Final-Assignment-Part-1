const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/albums?user=';
const API_KEY = '1704f3200cmshf9aee89de49ac2bp1c096cjsndfc76f7626b3';

async function searchmusic(userURL) {
	try{
		const response = await fetch(`${API_URL}${encodeURIComponent(userURL)}`, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': API_KEY,
                'X-RapidAPI-Host': 'soundcloud-scraper.p.rapidapi.com'
            }
        });
		//console.log(response)
		if (!response.ok) {
            throw new Error(`Failed to fetch movie data: ${response.status}`);
        }

        const data = await response.json();
        //console.log(data);//data
		displayplaylists(data.playlists);
		console.log(data.playlists.items);
	}
	catch (error) {
        const Info = document.getElementById('info');
        Info.innerHTML = `<p>Error: ${error.message}</p>`;
	}
}

function displayplaylists(playlists) {
    const displayInfo = document.getElementById('info');
    playlists.items.forEach(item => {
        const imageUrl = item.artworkUrl?.url || 'https://via.placeholder.com/450x450?text=No+Image';

        const dataContainer = document.createElement('div');
		dataContainer.classList.add('card'); 
        dataContainer.innerHTML = `
            <h2><a href="${item.permalinkUrl}">${item.title}</a></h2>
            <img src="${imageUrl}" alt="Playlist Artwork" style="width: 100%; height: auto; border-radius: 10px;" />
			<p><strong>discription:</strong> ${item.description || 'N/A'}</p>
            <p><strong>Genre:</strong> ${item.genre || 'N/A'}</p>
        `;
        displayInfo.appendChild(dataContainer);
    });
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

   


