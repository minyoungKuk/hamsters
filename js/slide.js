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
      console.log(data);
      
      const topRatedArray = data.results; 
      
  topRatedArray.forEach((card) => {
    topRated.innerHTML += `
    <div class="swiper-slide">
    <img src="https://image.tmdb.org/t/p/w300${card.poster_path}" 
    class="radius_img" alt="영화이미지" />
    </div>
    `


})

new Swiper('.swiper', {
    slidesPerView: 4,
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
}); 
    // breakpoints:{
    // 	280: {
    //        //280px 이하의 크기에서 옵션 값 
    //     },
    //     768 : {
    //     	//768px 이하의 크기에서 옵션 값 
    //     },
    //     1024 : {
    //        //1024px 이하의 크기에서 옵션 값 
    //     },
    //   } 
    // });

    // let swiper = new Swiper('.swiper', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         '@0.75': {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         '@1.00': {
    //             slidesPerView: 4,
    //             spaceBetween: 40,
    //         },
    //         '@1.50': {
    //             slidesPerView: 4,
    //             spaceBetween: 50,
    //         },
    //     }
    //   });  
});

const popular = document.getElementById("popular");

popular.innerHTML ="";

  fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then((data) => {
      console.log((data).results[19]);
      const popularArray = data.results;

      popularArray.forEach((card) => {
        popular.innerHTML += `
        <div class="swiper-slide">
        <img src="https://image.tmdb.org/t/p/w300${card.poster_path}" 
        class="radius_img" alt="영화이미지" />
        </div>
        `
    })

      new Swiper('.movie-cards .swiper-container' , {
        slidesPerView: 4, // 한 번에 보여줄 슬라이드 개수
        slidesPerGroup: 4, // 한 번에 보여줄 슬라이드 그룹 개수
        spaceBetween: 20,
        thredshold: 100,
        freeMode : true, // 슬라이드 넘길 때 위치 고정 여부 
        pagination: { // 페이지 번호 사용 여부
          el: '.swiper-container .swiper-pagination', // 페이지 번호 요소 선택자
          clickable: true, // 사용자의 페이지 번호 요소 제어 가능 여부
        },
        navigation: { // 슬라이드 이전/다음 버튼 사용 여부
          prevEl: '.swiper-button-prev', // 이전 버튼 선택자
          nextEl: '.swiper-button-next' // 다음 버튼 선택자
        },
    });
        // breakpoints:{
        //   280: {
        //        //280px 이하의 크기에서 옵션 값 
        //     },
        //     768 : {
        //       //768px 이하의 크기에서 옵션 값 
        //     },
        //     1024 : {
        //        //1024px 이하의 크기에서 옵션 값 
        //     },
        //   } 
    
    //   let swiper = new Swiper('.swiper-container', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    //     breakpoints: {
    //         '@0.75': {
    //             slidesPerView: 2,
    //             spaceBetween: 20,
    //         },
    //         '@1.00': {
    //             slidesPerView: 3,
    //             spaceBetween: 40,
    //         },
    //         '@1.50': {
    //             slidesPerView: 4,
    //             spaceBetween: 50,
    //         },
    //     }
    // });
  });
  


