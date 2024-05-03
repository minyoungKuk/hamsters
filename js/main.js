// 검색창
let searchTitle = function(){
    
}

// main - slide 넘기기
let 지금사진 = 1;
$('.next-btn').on('click', function(){
    if(지금사진 === 1){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        지금사진 += 1;
    } else if(지금사진 === 2){
        $('.slide-container').css('transform', `translateX(-200vw)`);
        지금사진 += 1;
    }
});


$('.prev-btn').on('click', function(){
    if(지금사진 === 2){
        $('.slide-container').css('transform', `translateX(0vw)`);
        지금사진 -= 1;
    } else if(지금사진 === 3){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        지금사진 -= 1;
    }
});

// main- slide 자동으로 넘어가기
let slideShow = setInterval(function(){
    if(지금사진 === 1){
        $('.slide-container').css('transform', `translateX(-100vw)`);
        지금사진 += 1;
    } else if(지금사진 === 2){
        $('.slide-container').css('transform', `translateX(-200vw)`);
        지금사진 += 1;
    } else if(지금사진 === 3){
        $('.slide-container').css('transform', `translateX(-0vw)`);
        지금사진 = 1;
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