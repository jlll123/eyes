var points = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	points.push(createVector(mouseX,mouseY))
}

function draw() {
	// ellipse(mouseX, mouseY, 20, 20);
	background(255)
	
	beginShape()
	points.forEach(p=>{
		fill(0)
		ellipse(p.x,p.y,5)
		curveVertex(p.x,p.y)
	})
	noFill()
	stroke(0)
	endShape(CLOSE)
}

function mouseMoved(){
	points.slice(-1)[0].x = mouseX
	points.slice(-1)[0].y = mouseY
}
function mousePressed(){
	points.push(createVector(mouseX,mouseY))
}
