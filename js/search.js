import { openDetailPage } from "./common.js";


let searchInput = document.querySelector(".search-input");
let searchBtn = document.querySelector(".search-btn");
let searchTextValue = document.querySelector(".search-text-value");

// TMDB 영화 리스트 가져오기
const apiKey = "4c329d16b4a318497a30199297839bb6";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMyOWQxNmI0YTMxODQ5N2EzMDE5OTI5NzgzOWJiNiIsInN1YiI6IjY2MjY5MDI5YjlhMGJkMDE2MWQ1YmQzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DVGQRZTSfphqw6UNo4rQYzhsF-C3GzH4apmBXzDPC0g",
  },
};

function searchData(val) {
  console.log(val);
  fetch(
    `https://api.themoviedb.org/3/search/movie?language=ko-KR&page=1&query=${val}&api_key=${apiKey}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {

      let movieList = response["results"];

      movieList.forEach((element) => {
        let movieTitle = element["title"];
        let movieImg = element["poster_path"];
        let movieId = element["id"];
        let card = `
            <div class="movie-card">
            <a class="movie-a" data-id="${movieId}">
              <img class="movie-img" src="https://image.tmdb.org/t/p/w500${movieImg}" alt="${movieTitle}" />
            </a>
            <p class="movie-title">${movieTitle}</p>
            </div>
            `;

        document.querySelector(".search-result").innerHTML += card;
      });
      

      // 검색된 영화 개수 표시하기
      const movieNum = document.querySelectorAll(".movie-card").length;
      document.querySelector(".search-text-num").append(`${movieNum}`);


      // 포스터 클릭하면 상세페이지 띄우기
      document.querySelectorAll('.movie-a').forEach((a) => {
        a.addEventListener("click", () => {
            console.log(a.dataset.id);
            openDetailPage(a.dataset.id)

        });    
      })

    })
    .catch((err) =>
      console.error(alert("오류가 발생했습니다. 다시 시도해주세요."))
    );
}

// 엔터키로 검색버튼 누르기
searchInput.addEventListener("keyup", function (event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    searchBtn.click();
  }
});


// 검색 버튼 누르면 querystring으로 현재 주소를 "주소?keyword=검색어"로 변경
searchBtn.addEventListener("click", function () {
  if (searchInput.value === "") {
    alert("검색어를 입력해주세요.");
  } else if (searchInput.value !== "") {
    let keyword = searchInput.value;
    document.querySelector(".search-text-value").append(keyword);
  }
});


// 메인페이지 검색어를 주소로 받아와서 검색 결과로 표시하기
let params = new URLSearchParams(window.location.search);
let keyword = params.get("keyword");
document.querySelector(".search-text-value").append(keyword);
searchData(keyword);



// 검색어 필터링 하기
searchBtn.addEventListener("click", function () {
  let val = searchInput.value;
  searchTextValue.innerHTML = val;
  document.querySelector(".search-text-num").innerHTML = "";
  document.querySelector(".search-result").innerHTML = "";
  searchData(val);
});