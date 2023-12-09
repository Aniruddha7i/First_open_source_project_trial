var body = document.querySelector("body");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
// console.log(bosy);
var color_change=()=>{
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",color_change);
color2.addEventListener("input",color_change);
