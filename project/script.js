const API_URL = 'https://soundcloud-scraper.p.rapidapi.com/v1/user/albums?user=';
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

function displayplaylists(albums) {
    const displayInfo = document.getElementById('info');
    albums.forEach(items => {
        const imageUrl = items.artworkUrl?.url || 'https://via.placeholder.com/300x450?text=No+Image';
		
        const dataContainer = document.createElement('div');
        dataContainer.style.marginBottom = '20px';
        dataContainer.innerHTML = `
            <h2>${items.title.text}</h2>
            <img src="${imageUrl}" alt="${items.permalinkUrl.text}" style="max-width: 100%; height: auto; border-radius: 10px;" />
            <p><strong>Release Year:</strong> ${items.createdAt?.year || 'N/A'}</p>
            <p><strong>Type:</strong> ${items.description?.text || 'N/A'}</p>
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

   


