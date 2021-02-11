var ball= document.getElementById("ball");
var drag =document.getElementById("drag");
var btn=document.getElementById("btn");
ball.addEventListener("drag",(e)=>{
    if(e.pageX!=0){
        drag.style.width=e.pageX+"px";
    }
})
btn.addEventListener("click",()=>{
 drag.classList.toggle("full");
})
ball.addEventListener("touchmove",(e)=>{
    console.log(e.touches[0].clientX)
    drag.style.width=e.touches[0].clientX+"px";

})