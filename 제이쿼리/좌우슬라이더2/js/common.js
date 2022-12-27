let liLength = $("#sliderList li").length;
let pos1 = -(liLength-2) * 100;
let pos2 = -(liLength-1) * 100;
let num =0;
function prevSlider() {
    num--;
  if ( num == -1 ) {
    num = liLength-1;
    $("#sliderList").prepend($(".slider" + liLength))
                    .css({ marginLeft: "-100%"})
                    .animate({ marginLeft: 0 }, function() {
                      for (n=liLength-1; n>0; n--) {
                        $("#sliderList").prepend($(".slider"+n))
                      }
                      $("#sliderList").css({ marginLeft: pos2+"%" })
                    })
  }
    else { 
        $("#sliderList").animate({ marginLeft: "+=100%" })
    }
    console.log(num)
}
function nextSlider() {
    num++;
    if ( num == liLength  ) {
        num = 0;
        $("#sliderList").append($(".slider1"))
                        .css({ marginLeft: pos1+'%' })
                        .animate({ marginLeft: pos2+'%' }, function() {
                            for (let n=2; n<liLength+1; n++ ) {
                                $("#sliderList").append($(".slider"+n))
                            }
                            // $("#sliderList").append($(".slider2"))
                            //                 .append($(".slider3"))
                            //                 .append($(".slider4"))
                            $("#sliderList").css({ marginLeft: 0 })                            
                        })
    }
    else { 
        $("#sliderList").animate({ marginLeft: "-=100%" })
    }
}
$(".prevBtn").on('click', function() {
    prevSlider();
})
$(".nextBtn").on('click', function() {
    nextSlider();
})

