let time = 0;

function setup() {
  createCanvas(720, 405);
}

function draw() {
  background(220,10);
   
 
  for (let i = 1; i < 360; i += 3) {
    float(x = cos(radians(i++)) * 50 + width / 2);
    float(y = sin(radians(i)) * 100 + height / 2);
    float(w = sin(radians(time+i*2)) * 100);
    w = abs(w);
   
    noStroke();
  fill(0,80);
    
   ellipse(x, y, w, w);
  }
  time++
}