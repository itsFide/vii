// More info btn
let btnMore = document.querySelector('.mobile-more-icon');
let modelInfo = document.querySelector('.mobile__model-info')
let body = document.querySelector('body');
btnMore.addEventListener('click',()=>{
    btnMore.classList.toggle('active')
    if(btnMore.classList.contains('active')){
        modelInfo.classList.add('show')
        body.style.overflow = 'hidden'
    } else{
        modelInfo.classList.remove('show')
        body.style.overflow = 'visible'
    }
})