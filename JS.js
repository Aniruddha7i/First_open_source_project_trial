var _ = require('lodash');
// console.log(_);
// The browser does not know the import 
// so we need to browsefy it 
// install browserfy by the help of npm
// Using browseify it convart out code into understandable for browser
//  browserify JS.js > bun.js
// using this comment we got a new js file which we need to link with main index.html file then only we we will get our result 
var arr=[4,7,8,9,3];
console.log(_.without(arr,3));
// again we need to update the bun.js file in same prosses
var body = document.querySelector("body");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
// console.log(bosy);
var color_change=()=>{
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",color_change);
color2.addEventListener("input",color_change);
