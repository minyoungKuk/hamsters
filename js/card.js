export function createCard(element) {
  const movieCard = document.createElement("li");
  const content = document.createElement("div");
  const title = document.createElement("p");
  const score = document.createElement("p");

  movieCard.style.backgroundImage = `url('https://image.tmdb.org/t/p/w185${element.poster_path}')`;
  movieCard.style.backgroundSize = "240px 320px";

  title.textContent = element.title;

  const scoreAverage = parseFloat(element.vote_average).toFixed(1);
  score.textContent = `평점: ${scoreAverage}`;

  movieCard.classList.add("movie-card");
  content.classList.add("content");
  title.classList.add("title");
  score.classList.add("rating");

  content.appendChild(title);
  content.appendChild(score);
  movieCard.appendChild(content);

  return movieCard;
}
