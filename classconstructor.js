//constructor

class car{
    
    constructor(brand,price,speed,capacity,colour){
        this.brand=brand;
        this.price=price;
        this.speed=speed;
        this.capacity=capacity;
        this.colour=colour;
    }
    create(){console.log(`I need ${this.brand}\nIts mini around ${ this.price} cost\nit run ${this.speed}\nthe capacity of ${this.capacity} seats\nand i love ${this.colour} colour` )}
}
const Output = new car("BMW CAR","25 LAKHS","200KMPH",5,"RED");
Output.create();