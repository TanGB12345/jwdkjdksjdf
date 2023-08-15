function preload(){

}
function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotpose);
}
function draw(){
image(video,0,0,300,300)
}
function gotpose(result){
    if(result.length>0){
        console.log(result);
        console.log("nose x" + result[0].pose.nose.x);
        console.log("nose y"+result[0].pose.net.y);
    }
}
function modelloaded(){
console.log("model is loaded");
}
function takesnapshot(){
    save('name.png');
}