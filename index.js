'use strict'

let titles = document.querySelectorAll('.title');
window.addEventListener('scroll',function(){
    let scroll = window.screenY;//現在のスクロール量を取得する
    let window_height = window.innerHeight;//画面全体の表示されている高さを取得する
    for(let title of titles){
        let titleaddress = title.getBoundingClientRect().top + scroll;
        console.log(titles)
        if(scroll > titleaddress - window_height){
            title.classList.add('scrollin')
        }
    }
});