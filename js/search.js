let params = new URLSearchParams(window.location.search) // 주소창 주소 가져오기
let keyword = params.get('keyword'); // 주소의 keyword 값 가져오기
document.querySelector('.search-text-value').append(keyword); // html에 keyword 값 추가

// TMDB 영화 리스트 가져오기
const apiKey = '4c329d16b4a318497a30199297839bb6';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMyOWQxNmI0YTMxODQ5N2EzMDE5OTI5NzgzOWJiNiIsInN1YiI6IjY2MjY5MDI5YjlhMGJkMDE2MWQ1YmQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVGQRZTSfphqw6UNo4rQYzhsF-C3GzH4apmBXzDPC0g'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1', options)
    .then(response => response.json())
    .then(response => {
        let movieList = response['results']
        console.log(movieList);
        movieList.forEach(element => {
      
            let movieTitle = element['title'];
            let movieImg = element['poster_path'];
            let card = `
            <div class="movie-card">
            <img class="movie-img" src="${movieImg}" alt="영화 포스터">
            <p class="movie-title">${movieTitle}</p>
            </div>
            `;


        });
    })
    .catch(err => console.error(alert('오류가 발생했습니다. 다시 시도해주세요.')));

    // 검색된 영화 개수 표시하기
    let movieNum = document.querySelectorAll('.movie-card').length;
    console.log(movieNum);
    document.querySelector('.search-text-num').append(`${movieNum}`);