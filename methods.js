let car = {
    brand: "BMW",
    model: "X5",
    year: 2024,

    // method: function inside object   //start -method
    start: function() {          
        console.log("Car started..."); // when method runs, this message will print
    }
}

// method is called
car.start(); // output → Car started...
