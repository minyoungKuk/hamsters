import { loadAllMovies } from "./movie.js";

// 평점순으로 영화를 정렬하는 함수
async function sortByRating() {
  try {
    const api = document.getElementById("totalcard");
    api.innerHTML = "";
    await loadAllMovies(); // 모든 영화 정보를 불러오기

    const cards = Array.from(document.querySelectorAll(".movie-card"));

    cards.sort((cardA, cardB) => {
      const ratingA = parseFloat(
        cardA.querySelector(".movie-score").innerText.split(": ")[1]
      );
      const ratingB = parseFloat(
        cardB.querySelector(".movie-score").innerText.split(": ")[1]
      );
      return ratingB - ratingA; // 평점을 기준으로 내림차순 정렬
    });

    cards.forEach((card) => {
      api.appendChild(card); // 정렬된 카드를 다시 추가
    });
  } catch (err) {
    console.error(err);
  }
}

// 평점순으로 영화를 정렬하는 함수를 export
export { sortByRating };
