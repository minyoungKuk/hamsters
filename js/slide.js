import { openDetailPage } from "./common.js";

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYzVkYjYzMTZhNDMzYTU3ZjY5ODBmN2FkYTcxYTczMiIsInN1YiI6IjY2MmQwOGNlYTgwNjczMDEyMmU4MzQ2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XG5lDAMMqpMSXOqvhyHp3_BEUAHKeRxTllhvKAJ-hF4'
    }
  };
  const topRated = document.getElementById("topRated");
  topRated.innerHTML =""; //초기화
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
  .then((response) => response.json())
  .then((data) => {
    const topRatedArray = data.results;   

  topRatedArray.forEach((card) => {
    topRated.innerHTML += `
    <div class="swiper-slide" id=${card.id}>
      <img src="https://image.tmdb.org/t/p/w300${card.poster_path}" 
      class="radius_img" alt="영화이미지" />
      <div class="content">
        <p class="title">${card.title}</p>
        <p class="rating">${'평점 : '}${card.vote_average.toFixed(1)}</p>
      </div>
    </div>
    `
  });
});
  // 클릭 이벤트 리스너 추가
  topRated.addEventListener('click', handleImageClick)
  
new Swiper('.swiper', {
    slidesPerView: 2,
    slidesPerGroup: 4,
    spaceBetween: 20,
    freeMode: true,
    thredshold: 100,
    pagination: {
      el: '.swiper .swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      prevEl: '.swiper .swiper-button-prev',
      nextEl: '.swiper .swiper-button-next',
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        900: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 40,
        },

      }
  });   

  // 이미지 클릭추가
  function handleImageClick(e) {
    const targetMovie = e.target.closest('.swiper-slide');
    const movieId = targetMovie.getAttribute('id')
    openDetailPage(movieId);
  
  }
    

const popular = document.getElementById("popular");

popular.innerHTML ="";

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then((data) => {
      const popularArray = data.results;

      popularArray.forEach((card) => {
        popular.innerHTML += `
        <div class="swiper-slide" id=${card.id}>
          <img src="https://image.tmdb.org/t/p/w300${card.poster_path}" 
          class="radius_img" alt="영화이미지" />
          <div class="content">
          <p class="title">${card.title}</p>
          <p class="rating">${'평점 : '}${card.vote_average.toFixed(1)}</p>
        </div>
        </div>
        `
    })

  // 클릭 이벤트 리스너 추가
  popular.addEventListener('click', handleImageClick)


});

  


