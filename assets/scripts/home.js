const fetchNewReleases = () => {
    SpotifyAPI.browseAllNewReleasesAsync()
      .then((data) => {
  
        const albums = data.albums.items
          .map((item) => {
            const artist = {
              name: item.artists[0].name,
              href: item.artists[0].external_urls.spotify,
            };
            const img = item.images.filter((element) => {
              return element.width === 64 && element.height === 64;
            })[0];
            const album = {
              name: item.name,
              href: item.external_urls.spotify,
              img: img,
            };
            return newCard(album, artist);
          })
          .join(" ");
        const targetDiv = document.querySelector(".row.app");
        targetDiv.innerHTML += albums;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newCard = (album, artist) => {
    return `
      <div class="col-2 ">
        <div class="card text-truncate">
          <img class="card-img-top" src="${album.img.url}" width="${album.img.width}" height="${album.img.height}"/>
          <div class="card-body">
              <a href="${album.href}" class="card-link"> <p class="card-title">${album.name}</p></a>
              <a href="${artist.href}" class="card-link"> <p class="card-subtitle mb-2 text-muted">${artist.name}</p></a>
          </div>
        </div>
      </div>`;
  };
  
  window.onload = () => {
    fetchNewReleases();
  };  