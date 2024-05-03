// 검색창
let searchTitle = function(){
    
}

// main - slide 넘기기
let showNow = 1;
$('.next-btn').on('click', function(){
    if(showNow === 1){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        showNow += 1;
    } else if(showNow === 2){
        $('.slide-container').css('transform', `translateX(-200vw)`);
        showNow += 1;
    }
});


$('.prev-btn').on('click', function(){
    if(showNow === 2){
        $('.slide-container').css('transform', `translateX(0vw)`);
        showNow -= 1;
    } else if(showNow === 3){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        showNow -= 1;
    }
});

// main- slide 자동으로 넘어가기
let slideShow = setInterval(function(){
    if(showNow === 1){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        showNow += 1;
    } else if(showNow === 2){
        $('.slide-container').css('transform', `translateX(-200vw)`);
        showNow += 1;
    } else if(showNow === 3){
        $('.slide-container').css('transform', `translateX(-0vw)`);
        showNow = 1;
    }
}, 7000);

// 검색 버튼 누르면 querystring으로 현재 주소를 "주소?keyword=검색어"로 변경
$('.search-btn').click(function(){
    let keyword = $('.search-input').val(); // 사용자가 쓴 검색어 가져오기
    window.location.href=`/pages/search.html?keyword=${keyword}`; // 주소 바꾸기
})


// footer
$('.custmer-center').click(function(){
    alert('고객센터는 준비중입니다.');
})