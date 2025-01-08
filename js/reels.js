//for문으로 12개 돌리기
for(i=1; i<13; i++){
 let reelsWrap = document.querySelector(".reels_wrap")
 let reelsBox = document.createElement("div")
 reelsBox.className = "reels_box"
 reelsBox.innerHTML = `
    <div class="reels_img">
     <div class="reels">
      <img src="./img/feed_img${i}.PNG" alt="x">
     </div>
     <!-- reels end -->
      <div class="reels_txt">
       <div class="reels_id">
        <img src="./img/story_img${i}.PNG" alt="x">
        <p>Instar_ID${i} · </p>
        <span>팔로우</span>
       </div>
       <!-- reels_id end -->
        <div class="reels_contents">
         <p>여기는 릴스 문구를 작성하는 영역입니다. 자유롭게 원하는 내용을 작성해 보세요!</p>
         <span class="add">더보기</span>
        </div>
        <!-- reels_contents end -->
         <div class="reels_audio">
          <a href="#">
           <p>♫ Instar_ID${i} · 오리지널 오디오</p>
          </a>
         </div>
         <!-- reels_audio end -->
      </div>
      <!-- reels_txt end -->
    </div>
    <!-- reels_img end -->
     <div class="reels_icon">
      <div class="icon">
       <ul>
        <li>
         <img id="like" src="./img/like.png" alt="x">
         <img id="hate" src="./img/hate.png" alt="x">
         <p id="likeNum">0</p>
        </li>
        <li>
         <img src="./img/comment.png" alt="x">
         <p id="commentNum">0</p>
        </li>
        <li><img src="./img/dm.png" alt="x"></li>
        <li>
         <img id="scrap" src="./img/scrap.png" alt="x">
         <img id="save" src="./img/save.png" alt="x">
        </li>
        <li><span>···</span></li>
        <li><a href="profile.html"><img src="./img/story_img${i}.PNG" alt="x"></a></li>
       </ul>
      </div>
      <!-- icon end -->
     </div>
     <!-- reels_icon end -->
 `
 reelsWrap.appendChild(reelsBox)
 reelsHandler(reelsBox)
}

function reelsHandler(reelsBox){
 let Like = reelsBox.querySelector("#like")
 let Hate = reelsBox.querySelector("#hate")
 let likeNum = reelsBox.querySelector("#likeNum").innerText
 let NumLike = Number(likeNum)

 function likeClick(){
  Like.style.display="none"
  Hate.style.display="inline"
  NumLike++
  reelsBox.querySelector("#likeNum").innerText = NumLike
 }
 Like.addEventListener("click",likeClick)
 
 function hateClick(){
  Like.style.display="inline"
  Hate.style.display="none"
  NumLike--
  reelsBox.querySelector("#likeNum").innerText = NumLike
 }
 Hate.addEventListener("click",hateClick)

 let scrap = reelsBox.querySelector("#scrap")
 let save = reelsBox.querySelector("#save")

 function scrapClick(){
  scrap.style.display="none"
  save.style.display="inline"
  alert("저장되었습니다.")
 }
 scrap.addEventListener("click",scrapClick)

 function saveClick(){
  scrap.style.display="inline"
  save.style.display="none"
  alert("저장이 취소되었습니다.")
 }
 save.addEventListener("click",saveClick)
}