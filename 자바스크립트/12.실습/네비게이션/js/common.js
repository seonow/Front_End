const list = document.querySelectorAll('#gnbList > li');
const snb = document.querySelectorAll('.snb');

list.forEach((li, i)=>{
    li.addEventListener('mouseenter', (e)=>{
        // snb[i].style.display = 'block';
        e.currentTarget.children[1].style.display = 'block';
    })
    li.addEventListener('mouseleave', (e)=>{
        // snb[i].style.display = 'none';
        e.currentTarget.children[1].style.display = 'none';
    })
})