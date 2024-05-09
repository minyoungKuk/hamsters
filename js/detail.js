const clickedMovieId = localStorage.getItem("clickedMovieId");
{
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
    },
  };

  fetch(
    `https://api.themoviedb.org/3/movie/${clickedMovieId}?language=ko-KR`,
    options
  )
    .then((response) => response.json())
    .then((element) => {
      const detail = document.getElementById("detail");

      const postimg = document.createElement("img");
      postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
      postimg.alt = "poster";
      postimg.className = "detail-poster";
      detail.appendChild(postimg);

      const detailList = document.createElement("ul");
      detailList.className = "detail-list";
      detail.appendChild(detailList);

      const titleli = document.createElement("p");
      titleli.innerText = element.title;
      titleli.className = "detail-title";

      const releaseDate = document.createElement("li");
      releaseDate.className = "detail-release-date";
      releaseDate.innerHTML = `<span class="title">개봉일</span> ${element.release_date}`;

      const rating = document.createElement("li");
      rating.className = "detail-rating";
      rating.innerHTML = `<span class="title">평점</span> ${element.vote_average.toFixed(
        1
      )}`;

      const overview = document.createElement("li");
      if (element.overview) {
        overview.innerHTML = `<span class="title">줄거리</span><p class="detail-overview">${element.overview}</p>`;
      } else {
        overview.innerHTML = `<span class="title">줄거리</span><p class="detail-overview"> 현재 한글로 된 줄거리는 지원되지 않습니다.</p>`;
      }

      detailList.appendChild(titleli);
      detailList.appendChild(releaseDate);
      detailList.appendChild(rating);
      detailList.appendChild(overview);
    })
    .catch((err) => console.error(err));
}
