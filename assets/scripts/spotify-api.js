const token =
"BQB5Lhdp-phjPdoVCTMo8toXBbOLGKqvqNODNfk7CgG9DjX3x7n9aTuS5CLvdiqlqEacoU7XzgqkIm_9DBI"

// Get all new releases from spotify API

const spotifyAPI = {
    browseAllNewReleases: async () => {
        const response = await fetch(
            'https://api.spotify.com/v1/browse/new-releases', {
                method: 'GET',
                headers: {
                    Authorization: 'Bearer ${token}',
                },
            }
        );
        const data = await response.json();
    },
};

spotifyAPI.browseAllNewReleases();