//전체 리스트 한번에 나옴

import { createCard } from "../js/card.js";

// API 요청 옵션 설정
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Njg3ZTZkMDRlNzg1YjBiOWRmNWZiOTZlNjAyNzFhZSIsInN1YiI6IjY2MjY3ODIxMmRkYTg5MDE4N2UzY2VhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m0VR-0DBlwf_cbftDltXdOACEDmLpdQ_8R3E6kmLDTg",
  },
};

// 영화 정보를 불러와서 화면에 표시하는 함수
async function lodeMovie(category) {
  try {
    // API에서 영화 정보 가져오기
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`,
      options
    );

    const data = await response.json();
    // 영화 정보를 표시할 요소 찾기
    const api = document.getElementById("totalcard");

    data.results.forEach((element) => {
      const moviecard = createCard(element);
      api.appendChild(moviecard);
    });
  } catch (err) {
    console.error(err);
  }
}

// 인기 영화와 평점이 높은 영화를 모두 불러와서 화면에 표시하는 함수
async function loadAllMovies() {
  try {
    await lodeMovie("popular"); // 인기 영화 불러오기
    await lodeMovie("top_rated"); // 평점이 높은 영화 불러오기
  } catch (err) {
    console.error(err);
  }
}

// loadAllMovies 함수를 외부로 공개
export { loadAllMovies };
