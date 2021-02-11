window.addEventListener("mousemove",(e)=>{
    var curser = document.getElementById("curser");
    var bc = document.getElementById("bc"); 
    curser.style.left=e.clientX+"px"
    curser.style.top=e.clientY+"px"

})