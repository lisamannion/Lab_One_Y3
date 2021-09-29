class BMI {
    // Constructor
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }

    // Methods
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2); // BMI Calculation
        return bmi;
    }
}//end BMI class

// Create new instance of the BMI class
let MyBmi = new BMI(2, 90);

// Variable to hold the calculated BMI by calling the calculateBMI() method 
let calculatedBMI = MyBmi.calculateBMI();

// Output the calculated BMI to the screen
console.log(calculatedBMI);