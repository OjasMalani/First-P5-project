function preload() {
    //leave this empty!!Warning🚧🚧!
}

function setup(){
    canvas= createCanvas(640,400);
    canvas.position(150,150);
    video= createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,200,150,220,200);
    fill(0,0,255);
    stroke(0,255,0);
    circle(51,51,59);
    circle(452,51,59);
}

function take_snapshot() {
    save('mustache_filter.png');
}