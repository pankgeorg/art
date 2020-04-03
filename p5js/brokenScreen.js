let pW, pH, sW, sH, ddW, ddH;
function setup() {
  const [W, H] = [windowWidth, windowHeight];
  colorMode(RGB, 100, 100, 100, 100);
  [sW, sH] = [random(W/2) + W/2 , random(H/2) + H/2]; 
  [pW, pH] = [sW + 1, sH + 1];
  createCanvas(W, H);
  background(100);
  noStroke();
  [ddW, ddH] = [random(100), random(100)]; 
  let c = [];
  for (let i = 0; i < 1000; i++) {
    fill(random(100), random(100), random(100), random(100));
    ellipse(random(W), random(H), random(100));
  }
}

function draw() {
  stroke(15 ,random(50) + sW%50 , sH % 100,100);
  const [W, H] = [windowWidth, windowHeight];
  [pW, pH] = [sW, sH];
  dW = Math.sign(ddW)*random(Math.abs(ddW));
  dH = Math.sign(ddH)*random(Math.abs(ddH));
  sW = Math.abs(sW + dW/10) % W;
  sH = Math.abs(sH + dH/10) % H;
  line(pW, pW, sW, sH);
  fill(15 ,random(50) + sW%50 , sH % 100,100);
}
