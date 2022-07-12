let eyes = []
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	for(var i=0;i<100;i++){
		eyes.push({
			x: random(width),
			y: random(height),
			sc: random()
		})
	}
}

function drawEye(x,y,sc){
	push()
		translate(x,y)
		scale(sc)
		fill(255)
		ellipse(0,0,200)
		fill(0)
		let ang = atan2(mouseY-y,
										mouseX-x)
		rotate(ang)
		// ellipse(0,0,50,30)
		ellipse(50,0,100)
	pop()
}

function draw() {
	background(0)
	// for(var o=0;o<height;o+=100){a
	// 	for(var i=0;i<width;i+=100){
	for(var i=0;i<eyes.length;i++){
		let eye =eyes[i]
		drawEye(eye.x,eye.y,eye.sc)
	}
		// }
	// }
	
	
	// ellipse(mouseX, mouseY, 20, 20);
}
