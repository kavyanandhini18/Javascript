
// =>
let a=11;
let oddorEven =(a) =>{
    if(a%2===0){
        return "Even";
    }
    return "Odd";
}
console.log(oddorEven);

//arrow func is used to write single line of code
 let Oddoreven =(a) => a%2===0? "Even" : "Odd"
 console.log(Oddoreven);



 // CALLBACK:
function operation(op, a, b) {  // OPERATION IS THE FIRST FUNCTION
    return op(a, b);      // call the function 'op' with values a and b   OP-ANOTHER FUNCTION
}

// 'multi' is a function (arrow function) that multiplies two numbers
let multi = (a, b) => a * b;  

// Here we pass 'multi' (the multiply function) and numbers 12, 5 into 'operation'
// So inside operation, op = multi, a = 12, b = 5
// It runs multi(12, 5) → 12 * 5 = 60
console.log(operation(multi, 12, 5)); // prints 60