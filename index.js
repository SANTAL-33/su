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

  // body要素を取得
  const body = document.getElementsByTagName('body')[0];
  console.log(body);
  // モーダルの背景を取得
  const modalBack = document.querySelector('.modal-back');
  console.log(modalBack);
  // モーダルを取得
  const modal = document.querySelector('.modal');
  console.log(modal);
  // ✕ボタンを取得
  const closeBtn = document.querySelector('.close');
  console.log(closeBtn);

  // イベントを付加
  window.addEventListener('DOMContentLoaded', function(e) {
      e.preventDefault();
      modalBack.classList.add('open');
      modal.classList.add('open');
      body.classList.add('open');
  });

  closeBtn.addEventListener('click', function() {
    modalBack.classList.remove('open');
    modal.classList.remove('open');
    body.classList.remove('open');
  });