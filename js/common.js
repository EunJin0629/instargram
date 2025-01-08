//h_sub 나타나기 _ search 영역
let Header = document.querySelector("#header")
let hSub = document.querySelector(".h_sub")
let Search = document.querySelector("#searchClick")
let subSearchClick = document.querySelector("#sub_searchClick")
let searchWrap = document.querySelector(".search_wrap")


//검색창 띄우기
function search(){
 Header.style.transform="translateX(-340px)"
 searchWrap.style.transform="translateX(480px)"
 alramWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="1"

}

Search.addEventListener("click",search)

//검색창 닫기

function subSearch(){
 Header.style.transform="translateX(0)"
 searchWrap.style.transform="translateX(-400px)"
 alramWrap.style.transform="translateX(-400px)"
 hSub.style.zIndex="-1"
}
subSearchClick.addEventListener("click",subSearch)

//Alram 띄우기
let Alram = document.querySelector("#alramClick")
let alramWrap = document.querySelector(".alram_wrap")

function AlramClick(){
Header.style.transform="translateX(-340px)"
alramWrap.style.transform="translateX(480px)"
searchWrap.style.transform="translateX(-400px)"
hSub.style.zIndex="1"
}
Alram.addEventListener("click",AlramClick)

//Alram 닫기
let subAlram = document.querySelector("#sub_alramClick")
function subAlramClick(){
Header.style.transform="translateX(0)"
alramWrap.style.transform="translateX(-400px)"
searchWrap.style.transform="translateX(-400px)"
hSub.style.zIndex="-1"
}
subAlram.addEventListener("click",subAlramClick)

//create 띄우기
let createClick = document.querySelector("#createClick")
let createWrap = document.querySelector(".create_wrap")

function create(){
 createWrap.style.display= "block"
}

createClick.addEventListener("click",create)

//create 닫기
let createBgclose = document.querySelector(".create_bgclose")
function Bgclose(){
 createWrap.style.display= "none"
}
createBgclose.addEventListener("click",Bgclose)
