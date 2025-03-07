function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("#39FF14");
    fill("#AO20F0");
    circle(150, 200, 300); // rosto
    fill("red");
    circle(150,150, 70); // olho esquerdo
    circle(250, 150, 60); // olho direito
    line(160, 270, 250, 235); // boca
    fill("black");
    triangle(300, 180, 170, 220, 220, 220); // nariz
    line(90, 115, 178, 113); // sobrancelha esquerda
    line(225, 80, 279, 106); // sobrancelha direita
    // circle(400,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  