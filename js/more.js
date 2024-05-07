import { createCard } from "./card.js";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
  },
};

let page = 1; // 페이지 수를 추적합니다.
const pageSize = 8; // 한 번에 표시할 항목 수를 정의합니다.
let movies = []; // 모든 영화 데이터를 저장할 배열입니다.

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

// 이미지 클릭추가
function handleImageClick(movieId) {
  localStorage.setItem("clickedMovieId", movieId);
}

function displayMovies() {
  const api = document.getElementById("totalcard");
  api.innerHTML = ""; // 이전의 내용을 지웁니다.
  const moviesToShow = movies.slice(0, page * pageSize); // 현재 페이지까지의 영화만 가져옵니다.
  moviesToShow.forEach((movie) => {
    const movieCard = createCard(movie);
    api.appendChild(movieCard);

    // 클릭 이벤트 리스너 추가
    // api.appendChild(movieCard);
    movieCard.addEventListener("click", () => {
      handleImageClick(movie.id); // 클릭한 이미지의 ID를 처리하는 함수 호출
      // 클릭한 이미지에 대한 상세 페이지로 이동하는 코드 추가
      window.location.href = "detail.html";
    });
  });

  if (movies.length <= page * pageSize) {
    const moreButton = document.getElementById("more-btn");
    moreButton.style.display = "none";
  } else {
    const moreButton = document.getElementById("more-btn");
    moreButton.style.display = "block"; // 버튼을 표시합니다.
    moreButton.addEventListener("click", loadMore); // 클릭 이벤트를 추가합니다.
  }
}

function loadMore() {
  page++; // 페이지 수를 증가시킵니다.
  displayMovies(); // 영화를 다시 표시합니다.
}

loadInitialMovies(); // 초기 영화를 로드합니다.
