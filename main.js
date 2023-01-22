const canvus = document.getElementById('myCanvas');
canvus.width = 200;

const context = canvus.getContext('2d');

const car = new Car(100,100,30,50);

animate();

function animate(){
    car.update();
    canvus.height = window.innerHeight;
    car.draw(context);
    requestAnimationFrame(animate);
}


