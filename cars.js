class Vehicle {
    // Constructor
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Methods
    Information() {
        // Output information to the screen
        console.log("\n" + `Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
    }

}//end Vechicle class

// Testing the Vehicle class
let myVehicle = new Vehicle('VW', 'Tiguan', 2014);
let info = myVehicle.Information();

class Cars extends Vehicle {
    constructor(make, model, year, doors) {
        super(make, model, year); // Getting information from the super class Vehicle
        this.doors = doors;
    }

    Information() {
        super.Information(); // Call the Information() method from the superclass
        console.log(`Doors: ${this.doors}`);
    }
}//end Cars class

// Testing Cars class with an object of the class
let myCar = new Cars('VW', 'Golf', 2011, 5);
myCar.Information();