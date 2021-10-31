noseX=0
noseY=0
lipX=0
lipY=0

function preload() {
    mustache = loadImage('https://i.postimg.cc/sDR95ZHZ/mustache.png');
    lips = loadImage('https://i.postimg.cc/PJ0W7CT0/lip.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustache, noseX, noseY, 50, 50);
    image(lips, lipX, lipY, 50, 50);
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x
        noseY= results[0].pose.nose.y
        lipX= results[0].pose.lip.x
        lipY= results[0].pose.lip.y
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("lip x = " + lipX);
        console.log("lip y = " + lipY);
    }
}