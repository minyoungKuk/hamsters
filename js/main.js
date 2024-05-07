let searchInput = document.querySelector('.search-input');
let searchBtn = document.querySelector('.search-btn');

// 엔터키로 검색버튼 누르기
searchInput.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
    searchBtn.click();
    }
});


// main - slide 클릭하여 넘기기
let showNow = 1;
document.querySelector('.next-btn').addEventListener('click', function(){
    if(showNow === 1){
        document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
        showNow += 1;
    } else if(showNow === 2){
        document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
        showNow += 1;
    }
});


document.querySelector('.prev-btn').addEventListener('click', function(){
    if(showNow === 2){
        document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
        showNow -= 1;
    } else if(showNow === 3){
        document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
        showNow -= 1;
    }
});


// main- slide 자동으로 넘어가기
let slideShow = setInterval(function(){
    if(showNow === 1){
        document.querySelector('.slide-container').style.transform = 'translateX(-100vw)';
        showNow += 1;
    } else if(showNow === 2){
        document.querySelector('.slide-container').style.transform = 'translateX(-200vw)';
        showNow += 1;
    } else if(showNow === 3){
        document.querySelector('.slide-container').style.transform = 'translateX(0vw)';
        showNow = 1;
    }
}, 8000);


// 검색 버튼 누르면 querystring으로 현재 주소를 "주소?keyword=검색어"로 변경
document.querySelector('.search-btn').addEventListener('click', function(){
    let keyword = document.querySelector('.search-input').value; 
    if(document.querySelector('.search-input').value === ""){ 
        alert('검색어를 입력해주세요.');
    } else if(document.querySelector('.search-input').value !== "") {
    
    window.location.href=`/pages/search.html?keyword=${keyword}`; 
    }
})


// footer
document.querySelector('.custmer-center').addEventListener('click', function(){
    alert('고객센터는 준비중입니다.');
})