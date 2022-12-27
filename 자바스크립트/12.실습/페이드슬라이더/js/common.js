const sliderList = document.getElementById('sliderList');
let list = document.querySelectorAll('#sliderList li');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const playBtn = document.querySelector('.replay');

let fadeNext = ()=>{
    list = document.querySelectorAll('#sliderList li');
    list[1].classList.add('on');
    list[1].style.opacity = 0;
    setTimeout(() => {
        list[1].style.transition = '0.5s';
        list[1].style.opacity = 1;
    },1);
    setTimeout(() => {
        list[0].classList.remove('on');
        sliderList.append(list[0]); 
        list.forEach(li=>{
            li.style.transition = 'none';
        })
    },500);

}

let timer = setInterval(fadeNext, 4000);

nextBtn.addEventListener('click',()=>{
    fadeNext();
    clearInterval(timer);
})


let fadePrev = ()=>{
    list = document.querySelectorAll('#sliderList li');
    list[list.length-1].classList.add('on');
    list[list.length-1].style.opacity = 0;
    setTimeout(() => {
        list[list.length-1].style.transition = '0.5s';
        list[list.length-1].style.opacity = 1;
    },1);
    setTimeout(() => {
        list[0].classList.remove('on');
        sliderList.prepend(list[list.length-1]); 
        list.forEach(li=>{
            li.style.transition = 'none';
        })
    },500);
}

prevBtn.addEventListener('click',()=>{
    fadePrev();
    clearInterval(timer);
})

playBtn.addEventListener('click',()=>{
    timer = setInterval(fadeNext, 4000);
})