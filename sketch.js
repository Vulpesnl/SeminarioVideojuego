let car, car2;
let bBox, topEdge, bottomEdge, rightEdge, leftEdge;
let gameEdges
function setup() {
	new Canvas(800, 800);

  gameEdges = new Group()
  // for (let i = 0; i < 4; i++) {
  //   const edge = new
  // }
  topEdge = new gameEdges.Sprite(0 , 0, width * 2, 0, 'static')
  bottomEdge = new gameEdges.Sprite(0 , height * 2, width *2, height *2,  'static')
  rightEdge = new gameEdges.Sprite(width * 2 , 0, width * 2, height*2,  'static')
  leftEdge = new gameEdges.Sprite(0 , 0, 0, height*2,  'static')
	car = new Sprite();
	car.diameter = 200;
  car.velocity = p5.Vector.random2D();
  car.vel.mult(40)
	car2 = new Sprite();
	car2.diameter = 100;
  car2.velocity = createVector(random(-1, 1), random(-1, 1))//p5.Vector.random2D();
  car2.vel.mult(5)
  car.addCollider(0 , 0, 200);
  car2.addCollider(0 , 0, 50);

  
}

function draw() {
  // translate(-width/2, -height/2)
	background('white');


  car.color = color('blue')
  car2.color = color('green')
  car.debug = mouseIsPressed;
  car2.debug = mouseIsPressed;
  if (car.collides(car2)) {
    car2.applyForce(10000)
    car2.color = color('yellow')
  }
  if (car.collides(gameEdges)) {
    car.applyForce(1000)

  }
  if (car.vel.mag() <= 5) {
    console.log('oeeeeee', car.vel.mag())
    car.vel.mult(5)
    car.applyForce(10000)
  }
  if (car2.vel.mag() <= 10) {
    console.log('oeeeeee', car.vel.mag())
    car2.vel.mult(10)
    car2.applyForce(10000)
  }
  if (car2.collides(car)) {
    car.applyForce(-10)
    car.color = color('red')
    car2.color = color('red')
  }
  

}

