window.addEventListener('load',function(e){

    this.setTimeout(function(){this.scrollTo(0,0)},5)
})


let num = 0;
let state = 1;
function scrolling(e){
    if(e.wheelDelta < 0 && state == 1){
        state = 0;
        num++;
        if(num > 2){
            num = 2;
            state = 1;
        }
        else{
            $('html, body').stop().animate({scrollTop:$('section:eq('+ num +')').position().top},500,function(){
                state = 1;
            });
        }
        console.log(num)
    }
    else if(e.wheelDelta > 0  && state == 1 ){
        state = 0;
        num--;
        if(num < 0){
            num = 0;
            state = 1;
        }
        else{
            $('html, body').stop().animate({scrollTop:$('section:eq('+ num +')').position().top},500,function(){
                state = 1;
            });
        }
    }
    $('#gnb li').removeClass('on');
    $('#gnb li:eq('+ num + ')').addClass('on');
}


document.addEventListener('wheel',(e)=>{
    e.preventDefault();
    scrolling(e);
},{passive: false})

$('#gnb li').on('click',function(e){
    num = $(this).index();
    $('#gnb li').removeClass('on');
    $(this).addClass('on');
    let idName = $(this).children('a').attr('href');
    let pos = $(idName).position().top;
    $('html, body').stop().animate({scrollTop:pos});
});
