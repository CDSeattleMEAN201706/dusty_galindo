function Vehicle(name, numberOfWheels, numberOfPassengers, speed){
    let self = this
    this.VIN = Math.floor(Math.random()*99999999)+1
    this.speed = speed
    this.name = name;
    this.numberOfWheels = numberOfWheels;
    this.numberOfPassengers = numberOfPassengers;
    this.distance_traveled = 0
    
    
}
Vehicle.prototype.updateDistanceTravelled = function(){
    this.distance_traveled += this.speed
    return this
}
Vehicle.prototype.checkMiles = function(){
    console.log(this.distance_traveled)
    return this
}
Vehicle.prototype.makeNoise = function(){
    console.log("vrrooom!")
    return this
}  
Vehicle.prototype.move = function(){
    this.updateDistanceTravelled()
    this.makeNoise()
    return this
}

let bike = new Vehicle("bike", 2, 1, 10)
bike.makeNoise = function(){
    console.log("ring ring!")
    return this
}
let sedan = new Vehicle("sedan", 4, 5, 55)
sedan.makeNoise = function(){
    console.log("Honk Honk!")
    return this
}
let bus = new Vehicle("bus", 8, 10, 35)
bus.pickUpPassengers = function(passengers){
    this.numberOfPassengers += passengers
    return this
}
bus.move().move().checkMiles().pickUpPassengers(10)
console.log(bus.numberOfPassengers)
console.log(bus.VIN, sedan.VIN)
