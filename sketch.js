let buttons = [];
let keyPressStartTimes = {}; // Store press time for each key
let currentExpression = 'a';

function createButtons() {
  buttons = [];

  let y = height - 55;
  let spacing = 22;

  //Define Buttons
  buttons.push(new Button("A", width / 2 - spacing * 3, y, () => currentExpression = 'a'));
  buttons.push(new Button("S", width / 2 - spacing, y, () => currentExpression = 's'));
  buttons.push(new Button("D", width / 2 + spacing, y, () => currentExpression = 'd'));
  buttons.push(new Button("F", width / 2 + spacing * 3, y, () => currentExpression = 'f'));
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  createButtons(); // Setup initial buttons based on window size
}

function draw() {
  background(220);

  // Draw Background Elements
  drawWave();
  drawLayerBottom();
  drawSeaSunlight();
  drawBubbleland();
  drawLandCircles();
  drawRightCircles();

  // Draw character
  drawScreamCharacter(currentExpression);

  // Draw buttons
  drawButtons();
  drawRotatingCircles();
}

// Level 1
function drawWave() {
  noStroke();
  let scaleX = windowWidth / 1811;
  let scaleY = windowHeight / 1280;

  fill(21, 28, 46);
  beginShape();
  vertex(1351.35 * scaleX, 388.26 * scaleY);
  bezierVertex((1351.35 - 286.45) * scaleX, (388.26 + 127.97) * scaleY, (1351.35 - 501.68) * scaleX, (388.26 + 54.74) * scaleY, (1351.35 - 501.68) * scaleX, (388.26 + 54.74) * scaleY);
  bezierVertex(320.13 * scaleX, 251 * scaleY, 0 * scaleX, 625.71 * scaleY, 0 * scaleX, 625.71 * scaleY);
  vertex(0 * scaleX, 1280 * scaleY);
  vertex(1811 * scaleX, 1280 * scaleY);
  vertex(1811 * scaleX, 429.84 * scaleY);
  bezierVertex((1811 - 114.81) * scaleX, (429.84 - 206.71) * scaleY, (1811 - 459.65) * scaleX, (429.84 - 41.58) * scaleY, (1811 - 459.65) * scaleX, (429.84 - 41.58) * scaleY);
  endShape(CLOSE);
}

function drawLayerBottom() {
  noStroke();
  let sX = windowWidth / 1811;
  let sY = windowHeight / 1280;

  fill(119, 165, 199); ellipse(556.43 * sX, 518.48 * sY, 363.26 * 2 * sX, 110.27 * 2 * sY);
  fill(100, 142, 184); ellipse(601.58 * sX, 533.79 * sY, 408.41 * 2 * sX, 113.2 * 2 * sY);
  fill(54, 101, 129); ellipse(625.51 * sX, 552.45 * sY, 398.67 * 2 * sX, 100.98 * 2 * sY);
  fill(23, 50, 79); ellipse(1523.89 * sX, 503.61 * sY, 241.43 * 2 * sX, 145.46 * 2 * sY);
  fill(125, 155, 181); ellipse(1446.04 * sX, 529.41 * sY, 241.43 * 2 * sX, 145.46 * 2 * sY);
  fill(89, 138, 170); ellipse(1348.32 * sX, 566.53 * sY, 241.43 * 2 * sX, 145.46 * 2 * sY);
  fill(13, 52, 109); ellipse(1241.81 * sX, 602.29 * sY, 385.94 * 2 * sX, 145.46 * 2 * sY);
  fill(61, 103, 125); ellipse(1230.88 * sX, 664.21 * sY, 385.94 * 2 * sX, 145.46 * 2 * sY);
}

function drawSeaSunlight() {
  noStroke();
  let sX = windowWidth / 1811;
  let sY = windowHeight / 1280;

  fill(25, 54, 70); ellipse(1228.69 * sX, 1062.82 * sY, 578.67 * 2 * sX, 210.8 * 2 * sY);
  fill(15, 22, 40); ellipse(1185.14 * sX, 944.66 * sY, 624.77 * 2 * sX, 228.39 * 2 * sY);
  fill(26, 73, 101); ellipse(1144.41 * sX, 867.08 * sY, 657.53 * 2 * sX, 228.39 * 2 * sY);
  fill(33, 43, 55); ellipse(1080.95 * sX, 776.19 * sY, 657.53 * 2 * sX, 228.39 * 2 * sY);
  fill(61, 103, 125); ellipse(1054.57 * sX, 716.27 * sY, 657.53 * 2 * sX, 228.39 * 2 * sY);
  fill(21, 28, 46); ellipse(1024.18 * sX, 682.21 * sY, 657.53 * 2 * sX, 205.94 * 2 * sY);
  fill(25, 54, 70); ellipse(1018.69 * sX, 647.26 * sY, 693.42 * 2 * sX, 153.96 * 2 * sY);
  fill(89, 138, 170); ellipse(829.66 * sX, 618.21 * sY, 515.51 * 2 * sX, 129.55 * 2 * sY);
  fill(26, 35, 50); ellipse(751.17 * sX, 609.82 * sY, 470.9 * 2 * sX, 111.52 * 2 * sY);
  fill(225, 190, 28); ellipse(724.94 * sX, 587.76 * sY, 415.84 * 2 * sX, 85.94 * 2 * sY);
  fill(195, 83, 20); ellipse(725.62 * sX, 568.34 * sY, 366.39 * 2 * sX, 49.86 * 2 * sY);
  fill(248, 200, 16); ellipse(722.04 * sX, 548.85 * sY, 279.39 * 2 * sX, 21.48 * 2 * sY);
  fill(236, 224, 166); ellipse(734.9 * sX, 538.38 * sY, 214.65 * 2 * sX, 3.27 * 2 * sY);
}

function drawBubbleland() {
  noStroke();
  let sX = windowWidth / 1811;
  let sY = windowHeight / 1280;

  fill(148, 129, 53); circle(1775 * sX, 721 * sY, 90 * sX);
  fill(39, 69, 59); circle(1775 * sX, 715 * sY, 50 * sX);
}

function drawLandCircles() {
  noStroke();
  let sX = windowWidth / 1811;
  let sY = windowHeight / 1280;
  let yOffset = 300;

  fill(105, 133, 95); circle(1610.05 * sX, (769.67 + yOffset) * sY, 399.48 * 2 * sX);
  fill(183, 169, 130); circle(1613.58 * sX, (782.01 + yOffset) * sY, 339.22 * 2 * sX);
  fill(102, 125, 119); circle(1640.33 * sX, (799.11 + yOffset) * sY, 323.67 * 2 * sX);
  fill(205, 185, 148); circle(1700.99 * sX, (858.13 + yOffset) * sY, 355.6 * 2 * sX);
  fill(193, 165, 58); circle(1821.48 * sX, (864.71 + yOffset) * sY, 355.6 * 2 * sX);
  fill(218, 179, 39); circle(1878.53 * sX, (849.43 + yOffset) * sY, 340.32 * 2 * sX);
  fill(37, 56, 52); circle(1964 * sX, (790.71 + yOffset) * sY, 340.32 * 2 * sX);
  fill(143, 109, 63); circle(1984.93 * sX, (793.4 + yOffset) * sY, 319.39 * 2 * sX);
  fill(39, 69, 59); circle(2009.53 * sX, (763.96 + yOffset) * sY, 308.54 * 2 * sX);
}

function drawRotatingCircles(){
translate(mouseX, mouseY)
// A circle changes color from hues of blue to orange as the mouse moves from left to right.
//  let r = map(mouseX, 0, width, 0, 255);
//  let b = map(mouseX, 255, width, 255, 0);
  let r = map(mouseX, 0, width, 0, 255);
  let g = map(mouseX, 0, width, 0, 255);
  let b = map(mouseX, 0, width, 255, 0);
//  fill(r, 50, b,50);
fill(r, g , b, 50);
noStroke();
  

for (let i = 0; i < 5; i++) {
    let size = map(i, 0, 5, 50, 10)
    translate(size, 200)
    rotate(radians(frameCount))
    circle(200, 200, size)
}
}

function drawRightCircles() {
  noStroke();
  let sX = windowWidth / 1811;
  let sY = windowHeight / 1280;

  fill(74, 100, 113); circle(1605.94 * sX, 510.69 * sY, 192.9 * 2 * sX);
  fill(34, 53, 109); circle(1551.19 * sX, 510.52 * sY, 168.45 * 2 * sX);
  fill(98, 125, 116); circle(1529.84 * sX, 518.35 * sY, 151.66 * 2 * sX);
  fill(40, 61, 116); circle(1504.31 * sX, 529.92 * sY, 154.27 * 2 * sX);
  fill(106, 134, 156); circle(1491 * sX, 536.01 * sY, 140.96 * 2 * sX);
  fill(175, 150, 119); circle(1450.5 * sX, 542.76 * sY, 94.6 * 2 * sX);
  fill(175, 115, 115); circle(1425.62 * sX, 555.33 * sY, 82.03 * 2 * sX);
  fill(86, 91, 111); circle(1399.86 * sX, 568.86 * sY, 74.85 * 2 * sX);
}

function drawScreamCharacter(expression) {
  push();
  translate(width / 3, height / 3);
  scale(0.8); // Scale down the character for better visibility

  //Body
  push();
  beginShape();
  fill('#4a4b4c');
  // Starting point
  vertex(219.56, 283.215);
  bezierVertex(161.235, 285.11, 142.937, 326.477, 142.937, 326.477);
  bezierVertex(142.937, 326.477, 131.807, 398.212, 131.807, 398.212);
  bezierVertex(131.807, 398.212, 153.263, 531.879, 123.641, 603.675);
  bezierVertex(86.829, 692.899, 75.15, 841.89, 75.15, 841.89);
  vertex(331.565, 841.89);
  bezierVertex(331.565, 841.89, 326.833, 700.232, 381.303, 619.149);
  bezierVertex(423.32, 556.603, 427.325, 429.452, 427.325, 429.452);
  vertex(431.177, 356.817);
  bezierVertex(440.094, 305.459, 396.782, 306.213, 396.782, 306.213);
  vertex(219.56, 283.215);
  endShape(CLOSE);
  pop();

  //Left Arm
  push();
  fill('#231f20');
  stroke('#231f20');
  strokeWeight(6);
  beginShape();
  // Starting point
  vertex(211.545, 313.387);
  bezierVertex(194.578, 377.035, 161.081, 408.672, 161.081, 408.672);
  bezierVertex(110.591, 504.957, 94.983, 572.776, 111.983, 626.02);
  bezierVertex(129.061, 679.87, 170.607, 661.739, 185.081, 635.424);
  bezierVertex(199.555, 609.109, 227.349, 565.018, 253.587, 470.564);
  bezierVertex(279.825, 376.11, 278.494, 329.459, 278.494, 329.459);
  bezierVertex(278.494, 329.459, 265.664, 282.703, 235.501, 316.298);
  endShape(CLOSE);
  pop();

  //Right Arm
  push();
  fill('#231f20');
  stroke('#231f20');
  strokeWeight(6);
  beginShape();
  // Starting point
  vertex(442.677, 289.429);
  bezierVertex(454.049, 289.429, 462.203, 300.443, 458.824, 311.301);
  bezierVertex(452.597, 331.308, 445.033, 361.594, 446.453, 387.167);
  bezierVertex(448.808, 429.559, 467.459, 610.129, 405.95, 639.371);
  bezierVertex(405.95, 639.371, 395.692, 645.241, 377.59, 646.093);
  bezierVertex(364.222, 646.722, 355.426, 632.28, 362.159, 620.714);
  bezierVertex(379.38, 591.128, 406.468, 537.069, 407.301, 488.539);
  bezierVertex(407.301, 488.539, 409.603, 424.838, 398.665, 381.545);
  bezierVertex(398.234, 379.838, 398.043, 378.086, 398.148, 376.329);
  bezierVertex(398.786, 365.618, 402.948, 326.224, 430.018, 295.127);
  bezierVertex(433.196, 291.477, 437.837, 289.429, 442.677, 289.429);
  endShape(CLOSE);
  pop();

  //Right Hand
  push();
  fill('#ffe6cc');
  stroke('#231f20');
  strokeWeight(4);
  beginShape();
  // Starting point
  vertex(447.245, 50.525);
  // Simulating "c" cubic bezier to right with flowing control
  bezierVertex(452.5, 52, 472, 60, 489.433, 92.645); // 42.188 as implied curve
  bezierVertex(490.7, 96.133, 492.75, 99.288, 495.4, 101.888); // smooth flow
  bezierVertex(500.6, 106.989, 508.855, 112.633, 519.283, 111.471);
  // Large body bulge (mimicking back curve)
  bezierVertex(570, 160, 470, 240, 440, 310); // rough placement of 64.25 → 256.397
  // Tail end of bulge (toward center-bottom)
  bezierVertex(440, 310, 435, 340, 425, 325); // simulate -6.916, 19.246
  // Inside spine/torso
  bezierVertex(404, 280, 460, 210, 480, 180); // 27.606–107.857
  // Inside return to top
  bezierVertex(500, 140, 490, 100, 447.245, 50.525); // 43.033–138.515
  endShape(CLOSE);
  pop();

  //Left Hand
  push();
  fill('#ffe6cc');
  stroke('#231f20');
  strokeWeight(4);
  beginShape();
  // Starting point
  vertex(319.081, 36.459);
  // Curve representing: -5.555, 6.292, -25.792, 26.585
  bezierVertex(310, 45, 290, 65, 264.23, 61.841);
  // Subtle transition to reflect control points for facial structure
  bezierVertex(262.8, 61.782, 261.5, 62.6, 260.6, 63.7);
  bezierVertex(256.54, 70.86, 241.357, 94.234, 215.052, 96.577);
  bezierVertex(213.113, 96.75, 211.575, 98.284, 211.485, 100.229);
  // Cheek and chin curvature
  bezierVertex(210.785, 115.477, 206.139, 177.001, 176.314, 204.537);
  bezierVertex(175.075, 205.681, 174.726, 207.489, 175.455, 209.009);
  // Side curls
  bezierVertex(177.781, 213.863, 182.525, 224.581, 183.306, 232.761);
  bezierVertex(183.372, 233.448, 183.59, 234.102, 183.986, 234.667);
  // Flow into the complex body region (arm/torso folds)
  bezierVertex(190.155, 243.472, 240.736, 320.702, 189.38, 417.725);
  bezierVertex(189.317, 417.843, 189.264, 417.959, 189.214, 418.084);
  // Bump with highlight ("magic" curved ridge)
  bezierVertex(188.139, 420.81, 176.295, 451.972, 207.684, 425.199);
  // Midsection folding out toward right side
  bezierVertex(207.684, 425.199, 261.337, 378.981, 259.612, 315.9);
  bezierVertex(259.596, 315.332, 257.954, 310.38, 257.7, 309.872);
  // Central vertical flow
  bezierVertex(252.842, 300.179, 213.925, 235.547, 222.344, 173.325);
  // Chin dip modifier
  bezierVertex(222.384, 173.027, 224.861, 160.095, 224.92, 159.8);
  // Neckline to skull region
  bezierVertex(225.981, 154.477, 238.182, 100.1, 301.196, 57.738);
  bezierVertex(301.196, 57.738, 313.013, 49.276, 324.745, 42.457);
  // The curve that wraps back toward the beginning
  bezierVertex(327.857, 40.648, 327.028, 35.868, 323.469, 35.332);
  bezierVertex(323.183, 35.289, 322.905, 35.241, 322.635, 35.188);
  bezierVertex(321.261, 34.917, 319.847, 35.338, 318.92, 36.389);
  endShape(CLOSE);
  pop();

  //Head
  push();
  fill("#ffe6cc")
  stroke("#231f20")
  strokeWeight(6)
  beginShape();
  vertex(452.178, 246.297);
  bezierVertex(452.178, 246.297, 540.969, 120.142, 447.127, 53.367999999999995);
  bezierVertex(355.017, -12.175000000000011, 267.65999999999997, 76.21, 237.026, 128.115);
  bezierVertex(214.53900000000002, 166.216, 191.57100000000003, 209.933, 256.218, 304.88300000000004);
  bezierVertex(256.218, 304.88300000000004, 268.59200000000004, 317.25700000000006, 270.332, 353.50800000000004);
  bezierVertex(270.745, 362.115, 270.044, 370.73400000000004, 268.495, 379.21000000000004);
  bezierVertex(264.434, 401.43800000000005, 258.811, 458.69900000000007, 308.743, 458.418);
  bezierVertex(308.743, 458.418, 338.001, 468.463, 361.268, 380.64);
  bezierVertex(385.93699999999995, 287.52299999999997, 415.813, 304.882, 452.17699999999996, 246.297);
  endShape();
  pop();

  //Interactive Mouth 
  push();
  fill(169, 146, 109)
  stroke(0)
  strokeWeight(6)
  if (expression === 'a') {
    //Mouth S
    fill(169, 146, 109)
    stroke(0)
    strokeWeight(6)
    beginShape();
    vertex(354.706, 297.443);
    bezierVertex(375.408, 226.783, 294.19800000000004, 249.492, 309.59200000000004, 328.71);
    bezierVertex(310.607, 333.431, 300.398, 353.59, 320.641, 345.37399999999997);
    bezierVertex(334.492, 340.65, 334.17600000000004, 328.33599999999996, 341.545, 318.789);
    bezierVertex(351.509, 307.632, 352.774, 301.245, 354.706, 297.443);
    endShape();
  }
  else if (expression === 's') {
    //Mouth M
    fill(169, 146, 109)
    stroke(0)
    strokeWeight(6)
    beginShape();
    vertex(364.611, 308.765);
    bezierVertex(394.705, 208.14, 276.652, 240.48, 299.031, 353.292);
    bezierVertex(300.50600000000003, 360.01599999999996, 285.666, 388.72299999999996, 315.092, 377.022);
    bezierVertex(326.20099999999996, 371.51099999999997, 333.92699999999996, 366.106, 336.421, 355.521);
    bezierVertex(337.693, 350.599, 342.234, 342.72900000000004, 345.48199999999997, 339.166);
    bezierVertex(359.965, 323.277, 361.803, 314.181, 364.61199999999997, 308.766);
    endShape();
  }
  else if (expression === 'd') {
    //Mouth L
    fill(169, 146, 109)
    stroke(0)
    strokeWeight(6)
    beginShape();
    vertex(365.897, 319.784);
    bezierVertex(398.451, 193.85899999999998, 270.75, 234.32999999999998, 294.957, 375.506);
    bezierVertex(296.553, 383.91999999999996, 280.5, 419.84499999999997, 312.331, 405.203);
    bezierVertex(324.348, 398.306, 332.706, 391.542, 335.403, 378.296);
    bezierVertex(336.779, 372.137, 341.69100000000003, 362.287, 345.204, 357.828);
    bezierVertex(360.871, 337.94399999999996, 362.85900000000004, 326.55999999999995, 365.897, 319.784);
    endShape();
  }
  else if (expression === 'f') {
    //Mouth XL
    fill(169, 146, 109)
    stroke(0)
    strokeWeight(6)
    beginShape();
    vertex(364.399, 332.493);
    bezierVertex(368.739, 324.013, 375.142, 301.543, 376.357, 292.13);
    bezierVertex(390.439, 182.973, 264.752, 226.11399999999998, 289.869, 373.671);
    bezierVertex(292.281, 387.84, 271.93, 437.821, 306.56100000000004, 418.423);
    bezierVertex(317.439, 412.33, 324.06100000000004, 407.319, 335.264, 384.368);
    bezierVertex(342.704, 369.126, 342.788, 367.185, 346.478, 362.086);
    bezierVertex(354.184, 351.43600000000004, 360.157, 340.78200000000004, 364.399, 332.493);
    endShape();
  }
  pop();

  //Right Eye
  push();
  fill("#ffffff")
  noStroke()
  beginShape();
  vertex(416.595, 171.886);
  bezierVertex(425.19100000000003, 155.048, 430.98400000000004, 137.918, 424.63500000000005, 122.745);
  bezierVertex(420.91900000000004, 115.02900000000001, 412.93000000000006, 112.161, 403.77400000000006, 115.429);
  bezierVertex(378.7660000000001, 125.225, 359.87100000000004, 159.052, 359.7830000000001, 185.506);
  bezierVertex(359.59600000000006, 195.825, 365.15600000000006, 206.13400000000001, 374.60600000000005, 206.48);
  bezierVertex(392.68800000000005, 207.016, 408.13800000000003, 186.962, 416.4870000000001, 172.084);
  vertex(416.5950000000001, 171.887);
  endShape();
  pop();

  //Right Eye Outline
  push();
  fill("rgba(0, 0, 0, 0)")
  stroke("#231f20")
  strokeWeight(5)
  strokeCap(ROUND);
  beginShape();
  vertex(425.527, 149.649);
  bezierVertex(427.93899999999996, 140.331, 428.187, 131.232, 424.635, 122.745);
  bezierVertex(420.919, 115.02900000000001, 412.93, 112.161, 403.774, 115.429);
  bezierVertex(378.766, 125.225, 359.871, 159.052, 359.783, 185.506);
  bezierVertex(359.596, 195.825, 365.156, 206.13400000000001, 374.606, 206.48);
  bezierVertex(384.007, 206.75799999999998, 392.69599999999997, 201.47199999999998, 400.046, 194.23999999999998);
  endShape()
  pop();


  //Left Eye
  push();
  fill(255); // #fff from SVG
  noStroke()
  beginShape();
  vertex(328.75, 142.738);
  bezierVertex(329.671, 130.989, 325.435, 115.691, 312.937, 112.038);
  bezierVertex(299.665, 108.694, 284.614, 116.215, 274.81, 124.913);
  bezierVertex(262.72, 135.79, 254.997, 153.045, 254.551, 169.228);
  bezierVertex(254.163, 177.005, 254.866, 184.389, 256.365, 191.75);
  bezierVertex(257.204, 195.357, 257.782, 198.886, 259.572, 201.562);
  bezierVertex(267.724, 214.213, 283.887, 209.047, 293.307, 200.46);
  bezierVertex(299.037, 195.606, 303.805, 190.603, 308.817, 184.51);
  bezierVertex(318.808, 172.522, 327.847, 157.459, 328.738, 142.899);
  endShape(CLOSE);
  pop()

  //Left Eye Outline
  push();
  fill("rgba(0, 0, 0, 0)")
  stroke("#231f20")
  strokeWeight(5)
  strokeCap(ROUND);
  beginShape();
  vertex(327.445, 128.638);
  bezierVertex(326.841, 126.745, 326.055, 124.905, 325.081, 123.146);
  bezierVertex(319.56100000000004, 113.177, 307.719, 104.426, 282.67100000000005, 119.841);
  bezierVertex(239.73000000000005, 146.266, 258.72300000000007, 198.291, 258.72300000000007, 198.291);
  bezierVertex(258.72300000000007, 198.291, 268.1820000000001, 225.542, 298.54800000000006, 194.988);
  bezierVertex(314.16300000000007, 179.276, 321.0930000000001, 168.15, 324.59100000000007, 159.252);
  endShape()
  pop();


  //Left Eye Pupil
  push();
  fill("#be1e2d")
  noStroke()
  translate(46.038, 371.874);
  rotate(-1.2341746739627502);
  beginShape();
  vertex(285.08, 147.874);
  bezierVertex(291.0557209931692, 147.874, 295.9, 150.39015970595094, 295.9, 153.494);
  bezierVertex(295.9, 156.59784029404906, 291.0557209931692, 159.114, 285.08, 159.114);
  bezierVertex(279.1042790068308, 159.114, 274.26, 156.59784029404906, 274.26, 153.494);
  bezierVertex(274.26, 150.39015970595094, 279.1042790068308, 147.874, 285.08, 147.874);
  endShape();
  pop();

  //Right Eye Pupil
  push();
  fill("#be1e2d")
  noStroke()
  translate(118.093, 479.258);
  rotate(-1.2341746739627502);
  beginShape();
  vertex(396.78, 150.789);
  bezierVertex(403.25388183751653, 150.789, 408.50199999999995, 153.30515970595093, 408.50199999999995, 156.409);
  bezierVertex(408.50199999999995, 159.51284029404906, 403.25388183751653, 162.029, 396.78, 162.029);
  bezierVertex(390.3061181624834, 162.029, 385.058, 159.51284029404906, 385.058, 156.409);
  bezierVertex(385.058, 153.30515970595093, 390.3061181624834, 150.789, 396.78, 150.789);
  endShape();
  pop();

  // Left Nostril
  push();
  fill("#231f20")
  beginShape();
  vertex(318.629, 204.211);
  bezierVertex(319.47200000000004, 203.34300000000002, 320.35, 202.514, 321.24800000000005, 201.704);
  bezierVertex(323.99700000000007, 199.226, 329.74100000000004, 193.377, 325.76500000000004, 190.91500000000002);
  bezierVertex(320.65200000000004, 187.75000000000003, 317.487, 191.15800000000002, 312.86100000000005, 199.193);
  bezierVertex(308.23500000000007, 207.227, 304.82700000000006, 209.662, 307.50500000000005, 211.61);
  bezierVertex(309.57900000000006, 213.119, 315.88900000000007, 207.03300000000002, 318.6290000000001, 204.211);
  endShape();
  pop();

  //Right Nostril
  push();
  fill("#231f20")
  beginShape();
  vertex(344.744, 193.793);
  bezierVertex(344.56, 193.61, 344.357, 193.441, 344.14700000000005, 193.288);
  bezierVertex(342.7420000000001, 192.27, 337.5160000000001, 189.01700000000002, 336.50600000000003, 196.08700000000002);
  bezierVertex(335.80400000000003, 201.002, 338.264, 202.68400000000003, 340.34200000000004, 203.24400000000003);
  bezierVertex(341.944, 203.67500000000004, 343.62800000000004, 203.13400000000001, 344.75500000000005, 201.91700000000003);
  bezierVertex(346.38900000000007, 200.15200000000004, 348.06600000000003, 197.10100000000003, 344.744, 193.79300000000003);
  endShape();
  pop();

  pop(); // End of character drawing
}

// Button class
class Button {
  constructor(label, x, y, action) {
    this.label = label;
    this.x = x;
    this.y = y;
    this.w = 40;
    this.h = 40;
    this.action = action;
    this.isActive = false
  }
  isHovered() {
    return mouseX > this.x && mouseX < this.x + this.w &&
      mouseY > this.y && mouseY < this.y + this.h;
  }

  show() {
    if (this.isHovered()|| this.isActive) {  
      fill(209, 99, 0); //Hover Color
    } else {
      fill(248, 208, 19); //Default Color
    }
    noStroke();
    rect(this.x, this.y, this.w, this.h, 5);
    textSize(17);
    fill(0);
    text(this.label, this.x + this.w / 2, this.y + this.h / 2);
  }

  clicked(mx, my) {
    return mx > this.x && mx < this.x + this.w && my > this.y && my < this.y + this.h;
  }
}

function drawButtons() {
  for (let b of buttons) {
    b.show();
  }
}

function mousePressed() {
  for (let b of buttons) {
    if (b.clicked(mouseX, mouseY)) {
      b.action();
    }
  }
}

function keyPressed() {
  let pressedKey = key.toUpperCase();
  for (let b of buttons) {
    if (b.label === pressedKey) {
      b.action();               // Trigger action
      b.isActive = true;        // Simulate hover
      keyPressStartTimes[pressedKey] = millis(); // Store press time
    }
  }
}

function keyReleased() {
  let releasedKey = key.toUpperCase();
  let releaseTime = millis();
  
  for (let b of buttons) {
    if (b.label === releasedKey) {
      let pressTime = keyPressStartTimes[releasedKey] || releaseTime;
      let duration = releaseTime - pressTime;
      

      setTimeout(() => {
        b.isActive = false;
      }, duration);
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createButtons(); // Recalculate button positions
}
