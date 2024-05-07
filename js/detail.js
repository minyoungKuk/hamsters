// const clickedMovieId = localStorage.getItem("clickedMovieId");
// {
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
//     },
//   };

//   fetch(
//     `https://api.themoviedb.org/3/movie/${clickedMovieId}?language=en-US`,
//     options
//   )
//     .then((response) => response.json())
//     .then((element) => {
//       const api = document.getElementById("detail");
//       const moviecard = document.createElement("li");
//       moviecard.className = "movie-detail";
//       api.appendChild(moviecard);

//       //   const post = document.createElement("div");
//       //   moviecard.appendChild(post);
//       const postimg = document.createElement("img");
//       postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
//       postimg.className = "detail-poster";
//       moviecard.appendChild(postimg);

//       const titleli = document.createElement("p");
//       titleli.innerText = element.title;
//       moviecard.appendChild(titleli);
//       titleli.className = "detail-title";

//       const releaseDate = document.createElement("li");
//       releaseDate.className = "detail-release-date";
//       releaseDate.innerHTML = `<span class="title">개봉일</span>${element.release_date}`;
//       moviecard.appendChild(releaseDate);

//       const rating = document.createElement("li");
//       rating.className = "detail-rating";
//       rating.innerHTML = `<span class="title">평점</span> ${element.vote_average}`;
//       moviecard.appendChild(rating);

//       const overview = document.createElement("li");
//       overview.innerHTML = `<span class="title">줄거리</span><p class="detail-overview">${element.overview}</p>`;
//       moviecard.appendChild(overview);
//     })
//     .catch((err) => console.error(err));
// }

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
    `https://api.themoviedb.org/3/movie/${clickedMovieId}?language=en-US`,
    options
  )
    .then((response) => response.json())
    .then((element) => {
      const detail = document.getElementById("detail");
      //   const detail = document.get("detail");

      // <ul> 요소 생성
      const detailList = document.createElement("ul");
      detailList.className = "detail-list";
      detail.appendChild(detailList);

      // <img> 요소 생성
      const postimg = document.createElement("img");
      postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
      postimg.alt = "poster";
      postimg.className = "detail-poster";
      detailList.appendChild(postimg);

      // <li> 요소 생성
      const titleli = document.createElement("p");
      titleli.innerText = element.title;
      titleli.className = "detail-title";

      const releaseDate = document.createElement("li");
      releaseDate.className = "detail-release-date";
      releaseDate.innerHTML = `<span class="title">개봉일</span> ${element.release_date}`;

      const rating = document.createElement("li");
      rating.className = "detail-rating";
      rating.innerHTML = `<span class="title">평점</span> ${element.vote_average}`;

      const overview = document.createElement("li");
      overview.innerHTML = `<span class="title">줄거리</span><p class="detail-overview">${element.overview}</p>`;

      // <ul> 안에 <li> 요소들 추가
      detailList.appendChild(titleli);
      detailList.appendChild(releaseDate);
      detailList.appendChild(rating);
      detailList.appendChild(overview);
    })
    .catch((err) => console.error(err));
}
