var a=10
var b=20
console.log(a+b)                                      //variables


//variable can be declared as
{
    var a=10
}
console.log(a)                                        //variables-var

{
    let a=20
    console.log(a)                                   //variables-let     
}

const c=10
console.log(c)                                       //variables-const(can be declared like this)
  
//const c=10
//c=20
//console.log(c)                                    //variables-const(cannot be declared like this, beacuse const can be assigned only once and cannot change the value after assigned)

var price=20
var product="keychain"
var tax=5
var total=(price+tax)
console.log(product)
console.log(total)                                   //variables-exercise


var fruit="apple"
var count=5
var price=100
var total=(count*price)
console.log(fruit)
console.log(total)                                  //variables-exercise

//OPERATORS:
//Increment-Pre-increment 
var a=10
var b=++a 
console.log(b)                                   
//Increment-Pre-decrement
var a=10
var b=--a
console.log(b)

//Increment-Post-increment (wrong format)
//var a=10
//var b=a++
//console.log(b)                this will not be executed shows ans as 10 beacuse var a=10 until it meets the another a it will not be executed

 //Increment-Post-increment (correct format)
 var a=20
 var b=a++
 console.log(a)

  //Increment-Post-decrement (correct format)
 var a=20
 var b=a--
 console.log(a)
//



//to concatenate strings using += operator
var text1 = "What a very ";
text1 += "nice day";
console.log(text1)

//to concatenate strings and number
var y = "5" + 5;
var z = "Hello" + 5;
console.log(y)
console.log(z)

//less than
var text1 = 20;
var text2 = "5";
var result = text1 < text2;
console.log(result)

//arthimetic operators
var num1=4
var num2=2
var result1=num1+num2
var result2=num1-num2
var result3=num1/num2
var result4=num1*num2
var result5=num1%num2    // %-gives remainder
var result6=1+"kavya"   //concatenation
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)
console.log(result5)
console.log(result6)

//boolean value (true=1 false=0)
var num1=true
var num2=false
var result=num1+num2
console.log(result)

//to add num by num itself we use += operator and + operator also
var num=4
num +=1
console.log(num)         // +=
                 
var num=4
num=num+1
console.log(num)        // +

//Exponentiation Operator ->(**)
var num=4
var result= 4 ** 3
console.log(result)

//Comparison or Relational operators (result will be printed as boolean values true or false)
//greater than >
var data=7 > 6
console.log(data)    //O/p:true
              
//less than <
var data=7 < 6
console.log(data)      //false         

//less than or equal to <=
var data=6 <= 6        //6==6
console.log(data)     //true                

var data=5 <= 10
console.log(data)   //true

var data=15 <= 10
console.log(data)   //false

//greater than or equal to >=
var data=6 >= 6  
console.log(data)     //true                

var data=5 >= 10
console.log(data)   //false

var data=15 >= 10
console.log(data)   //true

//comparing string and string
//P is greater than B 
var x="Pen"
var y="Book"
console.log(x>y)   //true

var x="Pen"
var y="Book"
console.log(x<y)    //false

var x="Pen"
var y="Pen"
console.log(x>=y)     //true

var x="Pen"
var y="Pencil"        //upto pen x&y are same after that y is greater because cil is there
console.log(x>y)       //false

var x="Pen"
var y="Pencil"        
console.log(x<y)      //true

//comparing string and number

var x="2"
var y=3
console.log(x<y)   //true

var x="2"
var y=3
console.log(x>y)  //false

//equal to operator ==
var x=3
var y=3
var result= x == y
console.log(result)       //true

var x="3"
var y=3
var result= x == y
console.log(result)     //true

var x=''
var y=false
var result= x==y
console.log(result)        //true

//Strict Equality Operator ===
var x="3"
var y=3
var result= x === y    //false
console.log(result)  

var x=''
var y=false
var result= x===y
console.log(result)    //false

//LOGICAL OPERATORS (&&,||,!)
//&& AND
var x=7,y=9,z=5
var result=x<y && x>z     //BOTH TRUE SO O/P:TRUE
console.log(result)

var x=7,y=9,z=5
var result=x<y && x<z     //ONE CONDITION IS FALSE(X<Z) SO O/P:FALSE
console.log(result)

// OR ||
var x=7,y=9,z=5
var result=x<y || x<z     // EVEN ONE CONDITION IS TRUE WE GET TRUE SO O/P:TRUE
console.log(result)

var x=7,y=2,z=5
var result=x<y || x<z     // IF BOTH CONDITION IS FALSE WE GET FALSE SO O/P:FALSE
console.log(result)
 
// NOT !
var x=7,y=2,z=5
var result=x<y || x<z    
var n= !result
console.log(result,n)            //WHEN RESULT IS FALSE IT CHANGES AS TRUE 

//TERNARY OPERATOR ?:
var num=8
var result
result=num%2===0 ? "Even" : "Odd"
console.log(result);               //EVEN

var num=8
var result
result=num%2!==0 ? "Even" : "Odd"
console.log(result);              //ODD



//DATATYPES -PRIMITIVE DATA TYPES
console.log(typeof("Apple"))   //STRING    

console.log(typeof(3))         //NUMBER

var d
console.log(typeof(d))             //Undefined

var a=null                    //Null
console.log(a)

console.log(typeof(true))    //boolean

console.log(typeof(1235689708546742468907653216789543n))  //BigInt


//different ways of using string
var user='Kavya "nandhini"'
console.log(user)                 //to mention in double quotes a specific name

var user="Kavya \"nandhini\""     //escape character
console.log(user)

var user="Ka\tvya \nnandhini"    // \n-newline  \t-tab
console.log(user)  

var user="Kavya nand\bddhini"   // \b-deletes the word
console.log(user) 

//different ways of using number
var y = 123e5
console.log(y)                 //exponential

var num1=0xf
console.log(num1)             //hexadecimal-0x

var num1=5/0
console.log(num1)            //infinity

//Data Types- TYPE CONVERSION
//TYPE CONVERSION (TYPES)- IMPLICIT AND EXPLICIT CONVERSION

var x=parseInt("123 hello")
console.log(x)                            //parseInt()	Parses a string and returns an integer

var x=parseFloat("12.3 hello")
console.log(x)                         //parseFloat()	Parses a string and returns a floating point number


//IMPLICIT CONVERSION
console.log("5" + 1);   // "51"   → Number 1 is converted to string
console.log("5" / 2);   //2.5     → String "5" is converted to number
console.log("5" - 1);   // 4      → String "5" is converted to number
console.log(true + 1);  // 2      → true is converted to 1
console.log(false + 1); // 1      → false is converted to 0

//EXPLICIT CONVERSION
//Number to string
let age=23
console.log(typeof age)
age=String(age)
console.log(typeof age)

//boolean to string
let isAdult=true
isAdult=String(isAdult)
console.log(typeof isAdult)

//string to number
let age1=23
console.log(typeof age1)
age=Number(age1)
console.log(typeof age1)

//boolean to number
let age2=true
console.log(typeof age2)
age2=Number(age2)
console.log(typeof age2)
console.log(age2)

//number to boolean
var x=1
console.log(typeof x)
x=Boolean(x)
console.log(typeof x)
console.log(x)

//string to boolean
var x='true'                          
console.log(typeof x)
x=Boolean(x)
console.log(typeof x)
console.log(x)               //true

var x='false'
console.log(typeof x)
x=Boolean(x)
console.log(typeof x)
console.log(x)           //true

var x=''
console.log(typeof x)
x=Boolean(x)
console.log(typeof x)
console.log(x)           //false
 






