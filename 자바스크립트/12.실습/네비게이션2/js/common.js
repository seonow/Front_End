const list = document.querySelectorAll('#gnbList > li');
const snb = document.querySelectorAll('.snb');

list.forEach((li, i)=>{
    li.addEventListener('mouseenter', (e)=>{
        e.currentTarget.style.overflow = 'visible';
        e.currentTarget.children[1].style.opacity = "1";
    })
    li.addEventListener('mouseleave', (e)=>{
        e.currentTarget.children[1].style.opacity = "0";
        setTimeout(()=> {
            // e.target.style.overflow = 'hidden';
            li.style.overflow = 'hidden';
        }, 500)
    })
})