const container = document.getElementById("movieContainer");

    function displayMovies(list) {
      container.innerHTML = '';
      list.forEach(movie => {
        const div = document.createElement("div");
        div.className = "movie";
        div.tabIndex = 0;
        div.onclick = () => {
          if (seriesData[movie.name]) {
            openPopup(movie.name);
          } else {
            window.location.href = movie.link;
          }
        };

        const img = document.createElement("img");
        img.src = movie.poster;
        img.alt = movie.name;

        const title = document.createElement("div");
        title.className = "movie-title";
        title.textContent = movie.name;

        div.appendChild(img);
        div.appendChild(title);
        container.appendChild(div);
      });
    }

    function toggleSearch() {
      const bar = document.getElementById("searchBar");
      bar.style.display = bar.style.display === "block" ? "none" : "block";
      if (bar.style.display === "block") {
        document.getElementById("searchInput").focus();
      } else {
        displayMovies(movies);
      }
    }

    function filterMovies() {
      const keyword = document.getElementById("searchInput").value.toLowerCase();
      const filtered = movies.filter(movie => movie.name.toLowerCase().includes(keyword));
      displayMovies(filtered);
    }

    function openPopup(seriesName) {
      const data = seriesData[seriesName];
      if (!data) return;

      document.getElementById("popupOverlay").style.display = "flex";
      document.getElementById("popupTitle").textContent = seriesName;

      const seasonContainer = document.getElementById("popupSeasons");
      const episodeContainer = document.getElementById("popupEpisodes");
      seasonContainer.innerHTML = '';
      episodeContainer.innerHTML = '';

      data.seasons.forEach((season, i) => {
        const btn = document.createElement("button");
        btn.textContent = season.title;
        btn.onclick = () => loadEpisodes(data.imdb_id, season.number, season.episodes);
        seasonContainer.appendChild(btn);

        if (i === 0) loadEpisodes(data.imdb_id, season.number, season.episodes);
      });
    }

    function loadEpisodes(imdb_id, seasonNumber, episodes) {
      const container = document.getElementById("popupEpisodes");
      container.innerHTML = '';

      const title = document.createElement("h3");
      title.textContent = `Season ${seasonNumber}`;
      container.appendChild(title);

      episodes.forEach(episode => {
        const epBtn = document.createElement("div");
        epBtn.textContent = episode.name;
        epBtn.onclick = () => {
          const url = `https://vidapi.xyz/embed/tv/${imdb_id}&s=${seasonNumber}&e=${episode.ep}`;
          window.location.href = url;
        };
        container.appendChild(epBtn);
      });
    }

    document.getElementById("popupClose").onclick = () => {
      document.getElementById("popupOverlay").style.display = "none";
    };

    window.onload = () => {
      displayMovies(movies);
      const first = document.querySelector(".movie");
      if (first) first.focus();
    };
