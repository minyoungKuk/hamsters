import { createCard } from "./card.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer YOUR_API_KEY",
  },
};

let page = 1; // 페이지 수를 추적합니다.
const pageSize = 8; // 한 번에 표시할 항목 수를 정의합니다.
let movies = []; // 모든 영화 데이터를 저장할 배열입니다.

async function loadMovies(category, page) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=${page}`,
      options
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function loadInitialMovies() {
  try {
    const popularMovies = await loadMovies("popular", page);
    const topRatedMovies = await loadMovies("top_rated", page);
    movies = [...popularMovies, ...topRatedMovies];
    displayMovies();
  } catch (error) {
    console.error(error);
  }
}

function displayMovies() {
  const api = document.getElementById("totalcard");
  api.innerHTML = ""; // 이전의 내용을 지웁니다.
  const moviesToShow = movies.slice(0, page * pageSize); // 현재 페이지까지의 영화만 가져옵니다.
  moviesToShow.forEach((movie) => {
    const movieCard = createCard(movie);
    api.appendChild(movieCard);
  });

  if (movies.length > page * pageSize) {
    const moreButton = document.getElementById("more-btn");
    moreButton.addEventListener("click", loadMore);
  }
}

function loadMore() {
  page++; // 페이지 수를 증가시킵니다.
  displayMovies(); // 영화를 다시 표시합니다.
}

loadInitialMovies(); // 초기 영화를 로드합니다.
