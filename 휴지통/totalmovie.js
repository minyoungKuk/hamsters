import { loadAllMovies } from "./movie.js";
import { sortByRating } from "./sortscore.js";
import { sortpopularity } from "./sortpopular.js";
import { sortByReleaseDate } from "./sortdate.js";
//초기화면
loadAllMovies();

//정렬 기능
document
  .getElementById("sort")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // 폼 제출 방지
    const sortBy = document.getElementById("sortBy").value;
    if (sortBy === "recent") {
      sortByReleaseDate();
    }
    if (sortBy === "popular") {
      sortpopularity();
    }
    if (sortBy === "rating") {
      sortByRating();
    }
  });
