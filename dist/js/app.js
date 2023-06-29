document.addEventListener('DOMContentLoaded',()=>{
    let burger = document.querySelector('.burger');
    let body = document.querySelector('body');
    let nav = document.querySelector('.header__nav')
    let header = document.querySelector('.header')
    burger.addEventListener('click',()=>{
        burger.classList.toggle('active')
        if(burger.classList.contains('active')){
            body.style.overflow = 'hidden'
            nav.classList.add('show')
        } else{
            body.style.overflow = 'visible'
            nav.classList.remove('show')
        }
    })
    
    function itemClose(item){
        item.style.height = `0px`
    }
    function itemOpen(item){
        item.style.height = `100%`
    }


    // search
    let searchInput = document.querySelector('.search__form input');
    let searchResult = document.querySelector('.search__result');
    let overlay = document.querySelector('.overlay');
    searchInput.addEventListener('click',()=>{
        overlay.classList.add('show')
        overlay.style.height = `${body.scrollHeight - 70}px`
        overlay.style.display = 'flex';
        searchResult.style.display = 'flex';
        setTimeout(()=>{
            searchResult.style.opacity = '1';
        },400)
    })
    overlay.addEventListener('click',()=>{
        if(overlay.classList.contains('show')){
            searchResult.style.opacity = '0';
            overlay.style.display = 'none'
            overlay.style.height = `0px`
            setTimeout(()=>{
                searchResult.style.display = 'none';
            },400)
        }
    })

    let mobileSearchIcon = document.querySelector('.mobile-search-icon');
    let search = document.querySelector('.search')
    let closeSearch = document.querySelector('.close-search')
    mobileSearchIcon.addEventListener('click',()=>{
        closeSearch.style.display = 'block';
        burger.style.display = 'none'
        search.style.display = 'block'
    })
    closeSearch.addEventListener('click',()=>{
        closeSearch.style.display = 'none';
        burger.style.display = 'flex'
        search.style.display = 'none'
        overlay.style.display = 'none';
    })
})