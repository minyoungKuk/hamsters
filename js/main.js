
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
    console.log('무한');
    }, 7000);