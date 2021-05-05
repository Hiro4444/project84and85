canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var images=["image2.jpg","image3.jpg","image4.jpg","mars.jpg"];
random_number = Math.floor(Math.random() * 4);
rover_width=100;
rover_height=100;
background_image=images[random_number];
rover_image="car1.png";
rover_x=10;
rover_y=10;

function add() {
    background_imgTag= new Image();
    background_imgTag.onload=UploadBackground;
    background_imgTag.src=background_image;

    rover_imgTag= new Image();
    rover_imgTag.onload=Uploadrover;
    rover_imgTag.src=rover_image;
}

function UploadBackground() {
ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function Uploadrover() {
    ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keyPressed=e.keyCode;
    if(keyPressed=='38') {
        up();
        console.log("up");
    }
    if(keyPressed=='40') {
        down();
        console.log("down");
    }
    if(keyPressed=='37') {
        left();
        console.log("left");
    }
    if(keyPressed=='39') {
        right();
        console.log("right");
    }
}

function up()  {
    if(rover_y>=0)  {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
        UploadBackground();
        Uploadrover();
    }
}

function down()  {
    if(rover_y<=500)  {
        rover_y=rover_y+10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
        UploadBackground();
        Uploadrover();
    }
}

function left()  {
    if(rover_x>=0)  {
        rover_x=rover_x-10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
        UploadBackground();
        Uploadrover();
    }
}

function right()  {
    if(rover_x<=700)  {
        rover_x=rover_x+10;
        console.log("when up arrow is pressed="+rover_x+"-"+rover_y);
        UploadBackground();
        Uploadrover();
    }
}