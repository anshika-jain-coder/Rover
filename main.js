var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;
rover_x=10;
rover_x=10;
var background_image="mars.jpg";
rover_image="rover.png";

function add(){
background_imgtag=new Image();
background_imgtag.onload=uploadBackground;
background_imgtag.src=background_image;
rover_imgtag=new Image();
rover_imgtag.onload=uploadRover;
rover_imgtag.src=rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}Window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=="38"){
    up();
    console.log("up");
}
if(keyPressed=="40"){
    down();
    console.log("down");
}
if(keyPressed=="37"){
    left();
    console.log("left");
}
if(keyPressed=="39"){
   right();
    console.log("right");
}}
function up(){
    if (rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x="+rover_x+"/y="+rover_y);
        uploadBackground();
        uploadRover();
        ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    }
}
function down(){
    if (rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x="+rover_x+"/y="+rover_y);
        uploadBackground();
        uploadRover();
        ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    }
}
function left(){
    if (rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed x="+rover_x+"/y="+rover_y);
        uploadBackground();
        uploadRover();
        ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    }
}
function right(){
    if (rover_x>=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed x="+rover_x+"/y="+rover_y);
        uploadBackground();
        uploadRover();
        ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
    }
}
 nasa_images_array=[
     "rover img 1.jpg";
     "rover img 2.jpg";
     "rover img 3.jpg";
     "rover img 4.jpg"
 ];
 var random_number=Math.floor(Math.random()*4);            
 background_image=nasa_images_array[random_number];