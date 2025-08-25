//OBJECTS-KEY:VALUE PAIRS
let car={                                        //car-object
    name:'nexon',
    brand:'tata',                                //brand:key tata:value
    driveTrain:'petrol,diesel,ev',              //name,brand,driveTrain-properties
}
console.log(car)

//object literals-  .  []
// . dot 
let car1={                                        
    name:'nexon',
    brand:'tata',                                
    driveTrain:'petrol,diesel,ev',              
}
console.log(car1.name)

// [] square bracket
let car2={                                        
    name:'nexon',
    brand:'tata',                                
    'drive Train':'petrol,diesel,ev',              //space occur so make it as string ' '-drive train
}
console.log(car2['drive Train'])                     

//to delete a property
let car3={                                        
    name:'nexon',
    brand:'tata',                                
    driveTrain:'petrol,diesel,ev',              
}
delete car3.brand                               //delete
console.log(car3)

//adding a new property to existing object
let car4={                                        
    name:'nexon',
    brand:'tata',                                
    driveTrain:'petrol,diesel,ev',                 
}
car4['Modelyear']=2024                             //added a new property
console.log(car4)

//To change property value of existing object
let car5={                                        
    name:'nexon',
    brand:'tata',                                
    driveTrain:'petrol,diesel,ev',                 
}
car5.price=18                                     // either . or [] can be used
car5['price']=18                                  
console.log(car5)

//To add  a function in Object
//wrong way
// let car6={                                             // O/P:PRICE NOT DEFINED BECAUSE WE HAVE USED TWO PRICE
//     name:'nexon',
//     brand:'tata',                                
//     driveTrain:'petrol,diesel,ev', 
//     price:15,                                               //
//     onRoadPrice(){
//         return price+2;
//      }             
// }
// car6.price=18                                             // 
// console.log(car6.onRoadPrice())  

//Correct way
let car7 = {
    name: 'nexon',
    brand: 'tata',
    driveTrain: 'petrol,diesel,ev',
    price: 15,
    onRoadPrice() {
        return this.price + 2;   
    }
};

car7.price = 18;                        //takes 18 +2 beacuse we have change the property of price from 15 to 18
console.log(car7.onRoadPrice()); 

//what if i have a argument in the function

//using this.price 
let car8 = {
    name: 'nexon',
    brand: 'tata',
    driveTrain: 'petrol,diesel,ev',
    price: 15,
    onRoadPrice(price) {                            //price is the argument                   
        return this.price + 2;   
    }
};
                                                   //O/P: 15+2=17 BECAUSE THIS IS USED so it doesnt care about argument
console.log(car8.onRoadPrice(11)); 

//using price
let car9 = {
    name: 'nexon',
    brand: 'tata',
    driveTrain: 'petrol,diesel,ev',
    price: 15,
    onRoadPrice(price) {                         
        return price + 2;                           
    }
};
                                                   //O/P: 11+2=13 BECAUSE THIS IS NOT USED SO IT TAKES THE ARGUMENT 11
console.log(car9.onRoadPrice(11)); 

//exercise
let user={
    name:'kavya',
    age:21,
}
user.name='kavya dc'
console.log(user.name)
delete user.name
console.log(user)         

//OBJECT REFERENCE
//IN OPERATOR: 
let person={
    name:'kavya',
    age:21,
}
console.log('name'in person)                   //if exist-true


let person1={
    name:'kavya',
    age:21,
}                                             //if does not exist-false
console.log('dob'in person1)                     

// for in loop [for in- key , for of-value]
//when we want to print value of the key:[] is used to print the value
let person2={
    name:'kavya',
    age:21,
}
for(key in person2){
    console.log(person2[key])
}

//when we want to print the key 
let person3={
    name:'kavya',
    age:21,
}
for(key in person3){
    console.log(key)
}

//when we want to print the key and value
let person4={
    name:'kavya',
    age:21,
}
for(key in person4){
    console.log(key+'-'+person4[key])
}

//OBJECT REFERNCE - PRIMITIVE , REFERENCE
//PRIMITIVE :a and b are independent (changes don’t affect each other).
let a1 = 10;   // primitive value
let b1 = a;    // copy the value of a

b = 20;       // change b

console.log(a1); // 10 (not changed)
console.log(b1); // 20


//REFERENCE:a and b are connected (change in one affects the other).HERE B IS CHANGED AS 20 S0 A ALSO CHANGES AS 20
let a = { 
    value: 10
 };                      // a points to an object { value: 10 }
let b = a;               // b also points to the SAME object

b.value = 20;            // change the object using b

console.log(a.value);    // 20 → a also sees the change
console.log(b.value);    // 20 → b sees the same change


//Constructor
function Mobile(model, price) {                            //  function ... = blueprint (design).
  this.model = model;
  this.price = price;                                       //this = points to the object being created.
}

let phone4 = new Mobile("iPhone", 80000);                 //new ... = create  objects from that blueprint.

let phone5 = new Mobile("Samsung", 60000);

console.log(phone4);
console.log(phone5);                                     


//CONSTRUCTOR-METHODS:
// Constructor function - a blueprint for creating phone objects
function Mobile(model, price) {  
  this.model = model;   // store the model name in the object being created
  this.price = price;   // store the price in the object being created

    this.showDetails = function() {      // Method added  inside constructor to show phone details 
    console.log(this.model, this.price);  // print model and price (comma separates them)
  }
}

let phone1 = new Mobile("iPhone", 80000);  // Create real objects from the blueprint using 'new'
let phone2 = new Mobile("Samsung", 60000);  


phone1.showDetails();  // Output: iPhone 80000     // Call the method to print details of each phone
phone2.showDetails();  // Output: Samsung 60000


//exercise
function laptop(){
    this.brand='HP';
    this.ram=19;
    this.price=18000;
    this.showSpecs=function(){
        console.log("Brand:"+ this.brand, "Ram:" + this.ram , "Price:"+this.price)
    }
}  
let laptop1=new laptop("Dell", 8, 50000);
let laptop2=new laptop("HP", 8, 50000);
let laptop3=new laptop("ASUS", 8, 50000);
 
laptop1.showSpecs();
laptop2.showSpecs();
laptop3.showSpecs();




