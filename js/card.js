export function createCard(element) {
  const movieCard = document.createElement("li");
  movieCard.className = "movie-card";
  movieCard.style.backgroundImage = `url('https://image.tmdb.org/t/p/w185${element.poster_path}')`;
  movieCard.style.backgroundSize = "240px 320px";

  const content = document.createElement("die");
  content.className = "content";
  movieCard.appendChild(content);

  const titlel = document.createElement("p");
  titlel.innerText = element.title;
  titlel.className = "title";
  movieCard.appendChild(titlel);

  const score = document.createElement("p");
  const scoreAverage = parseFloat(element.vote_average).toFixed(1);
  score.innerText = "평점: " + scoreAverage;
  movieCard.appendChild(score);
  score.className = "rating";

  content.appendChild(titlel);
  content.appendChild(score);

  return movieCard;
}
