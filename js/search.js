let searchInput = document.querySelector('.search-input');
let searchBtn = document.querySelector('.search-btn');
let val = searchInput.value; 

// 엔터키로 검색버튼 누르기
searchInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    searchBtn.click();
    }
});


// 검색 버튼 누르면 querystring으로 현재 주소를 "주소?keyword=검색어"로 변경
searchBtn.addEventListener('click', function(){
    if(searchInput.value === ""){ 
        alert('검색어를 입력해주세요.');
    } else if(searchInput.value !== "") {
    let keyword = searchInput.value; 
    window.location.href=`/pages/search.html?keyword=${keyword}`; 
    }
})

let params = new URLSearchParams(window.location.search) 
let keyword = params.get('keyword'); 
document.querySelector('.search-text-value').append(keyword); 


// TMDB 영화 리스트 가져오기
const apiKey = '4c329d16b4a318497a30199297839bb6';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMyOWQxNmI0YTMxODQ5N2EzMDE5OTI5NzgzOWJiNiIsInN1YiI6IjY2MjY5MDI5YjlhMGJkMDE2MWQ1YmQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVGQRZTSfphqw6UNo4rQYzhsF-C3GzH4apmBXzDPC0g'
    }
};

function searchData (val) {
    fetch(`https://api.themoviedb.org/3/search/movie?language=ko-KR&page=1&query=${val}&api_key=${apiKey}`, options)
    .then(response => response.json())
    .then(response => {
        document.querySelector('.movie-card').innerHTML = "";
        
        let movieList = response['results'];
        console.log(movieList);
        movieList.forEach(element => {
            
            let movieTitle = element['title'];
            let movieImg = element['poster_path'];
            let card = `
            <div class="movie-card">
            <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movieImg}" alt="${movieTitle}">
            <p class="movie-title">${movieTitle}</p>
            </div>
            `;

            

            document.querySelector('.search-result').innerHTML += card; 
        });
    })
    .catch(err => console.error(alert('오류가 발생했습니다. 다시 시도해주세요.')));
}

// 검색어 필터링 하기
searchBtn.addEventListener('click', function(){
    searchData(val);
})




// 검색된 영화 개수 표시하기
const movieNum = document.querySelectorAll('.movie-card').length;
console.log(movieNum);
document.querySelector('.search-text-num').append(`${movieNum}`);