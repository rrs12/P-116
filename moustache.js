nose_y=40;
nose_x=40
function preload(){
clown_nose=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
}

function setup(){
canvas=createCanvas(300,300)
canvas.center()
video=createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",getPoses)
}
function draw(){
image(video,0,0,300,300)
stroke(255,0,0)
fill(255,0,0)

image(clown_nose,nose_x-20,nose_y+2,40,20);
}

function take_snapshot(){
save("Clown_Filter.png")
}
button=document.getElementById("ts")

window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    console.log("hr")
    keyPressed=e.keyCode;
    if(keyPressed == 13){
        button.click()
    }
}

function modelLoaded(){
    console.log("PoseNet Is Initialized")
}
function getPoses(results){
if(results.length > 0){
nose_x=results[0].pose.nose.x
nose_y=results[0].pose.nose.y
console.log(nose_x,nose_y)
}
}