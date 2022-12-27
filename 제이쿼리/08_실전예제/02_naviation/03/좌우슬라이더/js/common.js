let sliderLength = $('#sliderList > div').length;
let pos1 = -(sliderLength -2) * 100 ; 
let pos2 = -(sliderLength -1) * 100 ;
let num = 0;
let state = 1;
function nextSlider(){
    state = 0;
    num++;
    if(num == sliderLength){
        num = 0
        $('#sliderList').append($('.slider1'))
                        .css({ marginLeft: pos1 + '%'})
                        .animate({marginLeft: pos2 + '%'},function(){
                            for(let n = 2;n<sliderLength+1;n++){
                                $('#sliderList').append($('.slider'+n))
                            }
                        //     // $('#sliderList').append($('.slider2'))
                        //                     // .append($('.slider3'))
                        //                     // .append($('.slider4'))
                            $('#sliderList').css({marginLeft:0})
                            state = 1;
                        })
    }
    else{
        $('#sliderList').animate({marginLeft:'-=100%'},function(){
            state = 1;
        })
    }
    $("#btnNum a").removeClass('on');
    $('#btnNum a:eq('+ num +')').addClass('on')
}

function prevSlider() {
    state = 0;
    num--;
    if ( num == -1 ) {
        state = 0;
        num = sliderLength-1;
        $("#sliderList").prepend($(".slider" + sliderLength))
                        .css({ marginLeft: "-100%"})
                        .animate({ marginLeft: 0 }, function() {
                        for (n=sliderLength-1; n>0; n--) {
                            $("#sliderList").prepend($(".slider"+n))
                        }
                        $("#sliderList").css({ marginLeft: pos2+"%" })
                        state = 1
                        })
  }
    else { 
        $("#sliderList").animate({ marginLeft: "+=100%" },function(){
            state = 1;
        })
    }
    $("#btnNum a").removeClass('on');
    $('#btnNum a:eq('+ num +')').addClass('on')
}

let timer = setInterval(nextSlider, 3000);


$('.nextBtn').on('click',function(){
    if(state == 1) nextSlider();
})

$(".prevBtn").on('click', function() {
    if(state == 1) prevSlider();
})

$('#btnNum a').on('click',function(){
    num = $(this).index();
    $("#btnNum a").not($(this)).removeClass('on');
    $(this).addClass('on');   
    let btnPos = num * (-100) + "%";
    $("#sliderList").animate({ marginLeft: btnPos })
})

$('#btnPos a, #btnNum a').on('click',function(e){
    e.preventDefault();
    clearInterval(timer);
})




