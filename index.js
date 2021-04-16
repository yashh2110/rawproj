var right=document.getElementById("right");
var left=document.getElementById("left");
var rec_list = document.getElementsByClassName("rec_list");
right.addEventListener("click",()=>{
  var pos = rec_list[0].offsetLeft;
  if(pos >-440){
  var moveleft= pos-225;
  var moveleft = moveleft.toString();
  document.getElementById("rec_list").style.left= moveleft+"px";
}
});
left.addEventListener("click",()=>{
  const pos = rec_list[0].offsetLeft;
  if(pos!=0){
    var moveleft= pos+225;
    var moveleft = moveleft.toString();
    document.getElementById("rec_list").style.left= moveleft+"px";
  }
})
