// export function createCard(element) {
//   // 영화 카드 요소 생성
//   const moviecard = document.createElement("li");
//   moviecard.className = "movie-card";

//   // 포스터 이미지 요소 생성 및 추가
//   const post = document.createElement("div");
//   moviecard.appendChild(post);
//   const postimg = document.createElement("img");
//   postimg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
//   post.appendChild(postimg);
//   postimg.className = "post-card";

//   // 평점 요소 생성 및 추가
//   const score = document.createElement("p");
//   const scoreaverage = parseFloat(element.vote_average).toFixed(1);
//   score.innerText = "평점: " + scoreaverage;
//   moviecard.appendChild(score);
//   score.className = "movie-score";
//   // 평점 요소를 화면에 표시하지 않도록 설정
//   score.style.display = "none";

//   // 인기 요소 생성 및 추가
//   const popular = document.createElement("p");
//   const popularity = parseFloat(element.popularity);
//   popular.innerText = "인기: " + popularity;
//   moviecard.appendChild(popular);
//   popular.className = "movie-popularity";
//   // 평점 요소를 화면에 표시하지 않도록 설정
//   popular.style.display = "none";

//   // 개봉일 요소 생성 및 추가
//   const date = document.createElement("p");
//   const releasedate = element.release_date;
//   date.innerText = "개봉일: " + releasedate;
//   moviecard.appendChild(date);
//   date.className = "movie-date";

//   // 평점 요소를 화면에 표시하지 않도록 설정
//   date.style.display = "none";

//   return moviecard;
// }

export function createCard(element) {
  // 영화 카드 요소 생성
  const movieCard = document.createElement("li");
  movieCard.className = "movie-card";

  // 포스터 이미지 요소 생성 및 추가
  const post = document.createElement("div");
  movieCard.appendChild(post);
  const postImg = document.createElement("img");
  postImg.src = "https://image.tmdb.org/t/p/w185" + element.poster_path;
  post.appendChild(postImg);
  postImg.className = "post-card";

  // 평점 요소 생성 및 추가
  const score = document.createElement("p");
  const scoreAverage = parseFloat(element.vote_average).toFixed(1);
  score.innerText = "평점: " + scoreAverage;
  movieCard.appendChild(score);
  score.className = "movie-score";
  // 평점 요소를 화면에 표시하지 않도록 설정
  score.style.display = "none";

  // 인기 요소 생성 및 추가
  const popular = document.createElement("p");
  const popularity = parseFloat(element.popularity);
  popular.innerText = "인기: " + popularity;
  movieCard.appendChild(popular);
  popular.className = "movie-popularity";
  // 평점 요소를 화면에 표시하지 않도록 설정
  popular.style.display = "none";

  // 개봉일 요소 생성 및 추가
  const date = document.createElement("p");
  const releaseDate = element.release_date;
  date.innerText = "개봉일: " + releaseDate;
  movieCard.appendChild(date);
  date.className = "movie-date";

  // 평점 요소를 화면에 표시하지 않도록 설정
  date.style.display = "none";

  return movieCard;
}
