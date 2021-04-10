const right=document.getElementById("right");
const left=document.getElementById("left");
const rec_list = document.getElementsByClassName("rec_list");
right.addEventListener("click",()=>{
  const pos = rec_list[0].offsetLeft;
  if(pos >-440){
  const moveleft= pos-225;
  const moveleft = moveleft.toString();
  document.getElementById("rec_list").style.left= moveleft+"px";
}
});
left.addEventListener("click",()=>{
  const pos = rec_list[0].offsetLeft;
  if(pos!=0){
    const moveleft= pos+225;
    const moveleft = moveleft.toString();
    document.getElementById("rec_list").style.left= moveleft+"px";
  }
})
