import { loadAllMovies } from "./movie.js";

async function sortByReleaseDate() {
  try {
    const api = document.getElementById("totalcard");
    api.innerHTML = "";
    await loadAllMovies();

    const cards = Array.from(api.children);

    cards.sort(dateAscending);

    cards.forEach((card) => {
      api.appendChild(card);
    });
  } catch (err) {
    console.error(err);
  }
}

function dateAscending(cardA, cardB) {
  const dateTextA = cardA.querySelector(".movie-date").innerText.split(": ")[1];
  const dateTextB = cardB.querySelector(".movie-date").innerText.split(": ")[1];

  const dateA = new Date(dateTextA);
  const dateB = new Date(dateTextB);

  //오름차순
  //   if (dateA > dateB) {
  //     return 1;
  //   } else if (dateA < dateB) {
  //     return -1;
  //   } else {
  //     return 0;
  //   }

  //내림차순
  if (dateA > dateB) {
    return -1;
  } else if (dateA < dateB) {
    return 1;
  } else {
    return 0;
  }
}

// sortByReleaseDate();
export { sortByReleaseDate };
