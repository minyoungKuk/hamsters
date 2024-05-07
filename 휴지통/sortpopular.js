import { loadAllMovies } from "./movie.js";

// 인기순으로 영화를 정렬하는 함수
async function sortpopularity() {
  try {
    const api = document.getElementById("totalcard");
    api.innerHTML = ""; //초기화
    await loadAllMovies(); // 모든 영화 정보를 불러오기

    const cards = Array.from(api.children);

    cards.sort((cardA, cardB) => {
      const popularityA = parseFloat(
        cardA.querySelector(".movie-popularity").innerText.split(": ")[1]
      );

      const popularityB = parseFloat(
        cardB.querySelector(".movie-popularity").innerText.split(": ")[1]
      );
      return popularityB - popularityA; // 인기도를 기준으로 내림차순 정렬
    });

    cards.forEach((card) => {
      api.appendChild(card); // 정렬된 카드를 다시 추가
    });
  } catch (err) {
    console.error(err);
  }
}

// 인기순으로 영화를 정렬하는 함수를 export
export { sortpopularity };
