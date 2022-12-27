let pos = $(window).height();
// let pos = $('#content1').position().top;
console.log(pos)
//#gnb li, #header a, .top 클릭시 해당위치로 슬라이딩

$('#header a').on('click',function(){
    $('html, body').animate({scrollTop: $(this).parent().next().next().position().top})
})
$('#gnb li').on('click',function(){
    let conPos = $($(this).children('a').attr('href')).position().top;
    $('html, body').stop().animate({scrollTop: conPos})
})
$('.top').on('click',function(){
    $('html, body').animate({scrollTop:0})
})

$(window).on('scroll',function(){
    if($(this).scrollTop() >= pos){
    $('#gnb').addClass('scroll')
    
    }
    else{
        $('#gnb').removeClass('scroll')
    }
})
$('#gnb').hover(function(){
    $(this).addClass('on')
},function(){
    $(this).removeClass('on')
})