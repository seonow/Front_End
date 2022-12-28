function resizing(){
    if($(window).width()>=1000){
        $('#gnb').removeClass('on2');
        $('.snb').css({display:'block'})
        $('#gnb').css({transition:'none'})
    }
    else{
        $('#gnb').removeClass('on');
        $('.snb').css({display:'none'})
        $('#gnb').css({transition:'1s'})
    }
}
$(window).on('resize',function(){
    resizing();
})

// pc버전
$('#gnbList .item').on('mouseenter',function(){
    $(this).parents('#gnb').addClass('on');
    $('#gnb').css({transition:'1s'})
})
$('#gnb').on('mouseleave',function(){
    $(this).removeClass('on');
})

// $('#gnbList .item').hover(function(){
//     $(this).parents('#gnb').addClass('on')
//     },function(){
//     $(this).parents('#gnb').removeClass('on');
// })



//모바일버전
$('.viewMenu').on('click',function(){
    $('#gnb').addClass('on2')
})
$('.closeMenu').on('click',function(){
    $('#gnb').removeClass('on2')
})

// $('.item').toggle(function(){
//     $(this).children('.snb').css({display:'block'})
// },function(){
//     $(this).children('.snb').css({display:'none'})
// })

$(document).on('click','#gnb.on2 .item',function(e){
    $('.snb').not($(this).children('.snb')).slideUp();
    $(this).children('.snb').slideToggle()
})