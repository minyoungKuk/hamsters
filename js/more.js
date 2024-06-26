import { createCard } from "./card.js";
import { openDetailPage } from "./common.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
  },
};

let page = 1;
const pageSize = 8;
let movies = [];

async function loadMovies(category, page) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
    options
  );
  const data = await response.json();
  return data.results;
}

async function loadInitialMovies() {
  const popularMovies = await loadMovies("popular", page);
  const topRatedMovies = await loadMovies("top_rated", page);
  movies = [...popularMovies, ...topRatedMovies];
  displayMovies();
}

function displayMovies() {
  const api = document.getElementById("totalcard");
  api.innerHTML = "";
  const moviesToShow = movies.slice(0, page * pageSize);
  moviesToShow.forEach((movie) => {
    const movieCard = createCard(movie);
    api.appendChild(movieCard);

    movieCard.addEventListener("click", () => {
      openDetailPage(movie.id);
    });
  });

  if (movies.length <= page * pageSize) {
    const moreButton = document.getElementById("more-btn");
    moreButton.style.display = "none";
  } else {
    const moreButton = document.getElementById("more-btn");
    moreButton.style.display = "block";
    moreButton.addEventListener("click", loadMore);
  }
}

function loadMore() {
  page++;
  displayMovies();
}

loadInitialMovies();
