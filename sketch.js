const tiles = 10

function setup() {
  createCanvas(900, 900)
  colorMode(HSB, 360, 100, 100, 100)
  noLoop()
  rectMode(CENTER)

}

function draw() {

  const tileSize = width / tiles
  const margin = width / 10
  const w = tileSize * 0.3
  const h = tileSize * 0.5
  let r

  background(259, 84, 20)

  noFill()
  strokeCap(SQUARE);
  strokeWeight(tileSize * 0.1)

  for (let y = margin; y < height - margin; y += tileSize) {
    for (let x = margin; x < width - margin; x += tileSize) {

      r = Math.floor(random(0, 6))
      
      // guidelines
      push()
      translate(tileSize / 2, tileSize / 2)
      strokeWeight(tileSize * 0.005)
      stroke(216, 0, 100, 20)
      //line(x - tileSize + margin, y, width - margin - tileSize, y)
      pop()

      // choose a stroke color
      pickColor()
      
      // draw at the center of each grid
      push()
      translate(tileSize / 2, tileSize / 2)

      if (r == 0) {
        beginShape()
        vertex(x - tileSize / 3, y - tileSize / 3)
        vertex(x + tileSize / 5, y)
        vertex(x - tileSize / 3, y + tileSize / 3)
        endShape()
      }

      if (r == 1) {
        beginShape()
        vertex(x - tileSize / 3, y - tileSize / 3)
        vertex(x, y + tileSize / 5)
        vertex(x + tileSize / 3, y - tileSize / 3)
        endShape()
      }

      if (r == 2) {
        rect(x, y, tileSize / 2, tileSize / 2)
        
      }

      if (r == 3) {
        beginShape()
        vertex(-w + x, y)
        bezierVertex(-w + x, -h + y, w + x, h + y, w + x, y)
        endShape()
      }
      
      if (r == 4) {
        
        beginShape()
        vertex(-w + x, y + tileSize / 6)
        bezierVertex(-w + x, -h + y + tileSize / 6, w + x, h + y + tileSize / 6, w + x, y + tileSize / 6)
        endShape()
        
        beginShape()
        vertex(-w + x, y - tileSize / 6)
        bezierVertex(-w + x, -h + y - tileSize / 6, w + x, h + y - tileSize / 6, w + x, y - tileSize / 6)
        endShape()
  
      }

      if (r == 5) {
        beginShape();
        vertex(x, -w + y)
        quadraticVertex(w + x, -w + y, w + x, y);
        quadraticVertex(w + x, w + y, x, w + y);
        quadraticVertex(-w + x, w + y, -w + x, y);
        quadraticVertex(-w + x, -w + y, x, -w + y);
        endShape();
      }
      pop()
    }
  }
}

function pickColor() {
  let palette = Math.floor(random(0, 3))
  let c
  if (palette == 0) {
    c = stroke(220, 28, 95)
  }
  if (palette == 1) {
    c = stroke(39, 58, 95)
  }
  if (palette == 2) {
    c = stroke(0, 45, 95)
  }
  return c
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  }
}