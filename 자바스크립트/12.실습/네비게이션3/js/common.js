
const header = document.getElementById("header");
const gnb = document.getElementById("gnb");
const slogan = document.querySelector("#videoWrap h2");

setTimeout(()=> {
    slogan.style.opacity = 1;
}, 2000)

gnb.addEventListener('mouseenter', ()=>{
    header.classList.add('on')
})
header.addEventListener('mouseleave', ()=>{
    header.classList.remove('on')
})