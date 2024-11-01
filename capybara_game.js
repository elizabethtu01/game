let capybara = {
  x: 0,
  y: 200,
  speed: 10
};

let shadowX = 350; // X position for the shadow
let shadowY = 200; // Y position for the shadow

let gameOver = false;
let win = false;

function setup() {
  createCanvas(700, 450);
  capybara.x = 0; // Start capybara from the left side of the canvas
}

function draw() {
  background(200);

  // Draw the shadow (silhouette) at a fixed position in white
  drawCapybaraShape(shadowX, shadowY, 1, true); // 'true' indicates it's a shadow (white color)

  if (!gameOver) {
    // Move the capybara across the screen
    capybara.x += capybara.speed;

    // Draw the capybara in brown
    drawCapybaraShape(capybara.x, capybara.y, 1, false); // 'false' for the main capybara (brown color)

    // Check if the capybara goes off the screen (game over condition)
    if (capybara.x > width + 50) {
      gameOver = true;
    }
  } else {
    // Display result message based on win/loss
    textAlign(CENTER, CENTER);
    textSize(32);
    fill(0);
    if (win) {
      text("You Win! Capybara Fit Perfectly!", width / 2, height / 2);
    } else {
      text("Game Over! Capybara Missed the Shadow!", width / 2, height / 2);
    }
  }
}

function mousePressed() {
  // Stop the capybara movement and check if it fits the shadow
  if (!gameOver) {
    let distance = dist(capybara.x, capybara.y, shadowX, shadowY);
    if (distance < 20) { // Adjust the threshold for a more precise fit
      win = true;
    }
    gameOver = true; // Stop the game when the mouse is pressed
  }
}

function drawCapybaraShape(x, y, scale, isShadow) {
  // Draw the capybara shape using basic shapes
  push();
  translate(x, y);

  // Set color based on whether it's the shadow or the actual capybara
  let bodyColor = isShadow ? color(255, 255, 255) : color(160, 82, 45);
  let legColor = isShadow ? color(255, 255, 255) : color(130, 70, 40);
  let noseColor = isShadow ? color(255, 255, 255) : color(100, 50, 30);
  let eyeColor = isShadow ? color(255, 255, 255) : color(0);
  let nosepartColor = isShadow ? color(255,255,255) : color(131, 67, 51)

  noStroke();

  // Body
  fill(legColor);
  rect(50, 40, 10, 28); // Front leg
  rect(-20, 55, 10, 15); // Middle-back leg
  
  fill(bodyColor);
  ellipse(0, 0, 170, 120); // Main body

  // Ears
  fill(legColor);
  ellipse(95, -65, 18, 28); // Left ear
  ellipse(65, -65, 18, 28); // Right ear
  ellipse(95, -65, 18, 28); // Left small ear
  ellipse(65, -65, 18, 28); // Right small ear
  
  // Head
  fill(bodyColor);
  ellipse(80, -30, 100, 80); // Head

  // Eyes
  fill(eyeColor);
  ellipse(100, -40, 8, 8); // Left eye
  ellipse(80, -40, 8, 8); // Right eye

  // Nose
  fill(nosepartColor);
  ellipse(95, -16, 45, 35);
  fill(noseColor); // Darker shade for nose

  // Mouth
  stroke(noseColor);
  strokeWeight(2);
  translate(1, -8);
  line(95, -10, 95, 0); // Vertical line for mouth
  translate(-1, 0);
  line(88, -3, 95, 0);
  translate(2, 0);
  line(102, -3, 95, 0);
  noStroke();

  // Legs (simple rectangles)
  fill(legColor);
  rect(-60, 40, 13, 40); // Back leg
  rect(20, 40, 13, 40); // Middle-front leg

  // Tail (simple ellipse)
  fill(bodyColor);
  ellipse(-90, 20, 20, 10); // Small tail

  // Feet (simple ovals for each leg)
  fill(noseColor);
  ellipse(-50, 80, 20, 10); // Back foot
  ellipse(-13, 78, 20, 10); // Middle-back foot
  ellipse(30, 80, 20, 10); // Middle-front foot
  ellipse(58, 75, 20, 10); // Front foot

  rotate(1);
  translate(-1, 10);
  ellipse(35, -90, 10, 5); // Oval-shaped nose
  rotate(-5);
  translate(-80, 250);
  ellipse(-7, -320, 10, 5);

  pop();
}
