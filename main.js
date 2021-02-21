var mouseEvent="empty";

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red";
width=3;
radius= 50;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
color= document.getElementById("colour_input").value;
width= document.getElementById("width_input").value;
radius= document.getElementById("radius_input").value;
mouseEvent="mouseDown";}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseLeave";}


canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUp";}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
if (mouseEvent== "mouseDown"){
console.log("Current position of x and y coordinates = ");
console.log("x= "+ current_x+ " y= "+ current_y);
ctx.beginPath();
ctx.strokeStyle= color;
ctx.lineWidth= width;
ctx. arc(current_x, current_y, radius, 0, 2 * Math.PI);
ctx.stroke();}}

function erase(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);}
    