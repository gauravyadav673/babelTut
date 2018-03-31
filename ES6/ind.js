class ship{
	constructor(color, size=10, speed=100){
    	this.size = size
      	this.speed = speed
      	this.color = color
    }
  
  	getSpeed(){
    	return this.speed;
    }
  	setColor(newColor){
    	this.color = newColor
    } 
}

var cruise = new ship('red');
console.log(cruise.size);