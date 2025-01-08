
 //send 클릭하면 send_wrap창 띄우기
 let sendWrap = document.querySelector(".send_wrap")
 let send = document.querySelector(".send")
/*  let sendBgClose = document.querySelector(".send_bgclose")
 let sendClose = document.querySelector(".close") */

 function sendClick(){
  sendWrap.style.display = "block"
 }

 send.addEventListener("click",sendClick)

 //send_bgclose, close 누르면 send_wrap 창 닫기


 function sendCloseClick(){
  sendWrap.style.display = "none"
 }
/*  sendBgClose.addEventListener("click",sendCloseClick)
 sendClose.addEventListener("click",sendCloseClick) */

 //onclick으로 direct_wrap 띄우기
let directWrap = document.querySelector(".direct_wrap")
 function directClick(){
  directWrap.style.display = "block"
 }