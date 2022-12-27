//썸네일을 클릭시 #photo의 이미지가 바뀌도록
//a를 클릭하면 

const photo = document.getElementById('photo');
const photoList = document.getElementById('photoList');
const list = document.querySelectorAll('#photoList li a');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// let changeImg = () => {
//     photo.src = `img/pic_${i}.jpg`
// }

for(let i=0;i<list.length;i++){
    list[i].addEventListener('click',(e)=>{
        e.preventDefault();
        photo.src = e.currentTarget.href;
      
        // let imgpath = e.currentTarget.href;
        // photo.src = imgpath;
      
        // photo.src = `img/pic_${i+1}.jpg`
    })
}

// list[1].addEventListener('click',(e)=>{
//     e.preventDefault();
//     photo.src = `img/pic_2.jpg`
// })
// list[2].addEventListener('click',(e)=>{
//     e.preventDefault();
//     photo.src = `img/pic_3.jpg`
// })
let n = 0;

nextBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(n <= -500) return;
    n -= 100;
    photoList.style.marginLeft= `${n}px`;
})
prevBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if( n>= 0) return;
    n += 100;
    photoList.style.marginLeft= `${n}px`;
})
