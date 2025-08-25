//FUNCTIONS

//basic syntax
function abc()
{
    console.log("function is working")
}
abc()                                                                     //basic syntax

var a=20
var b=10
function add()
{
    console.log(a+b)
}
add()                                                                     //exercise

var factor="vijay"
var fplayer="dhoni"
var fmovie="Leo"
function favourite()
{
    console.log("Favourite actor:"+ factor)
    console.log("Favourite player:"+ fplayer)
    console.log("Favourite  movie:"+ fmovie)
}
favourite()

//FUNCTION PARAMETERS
//basic syntax
function add(a,b)
{
    console.log(a+b)          //parameters-a,b
}
add(10,20)


//exercise - find area
function area(length,breadth)
{
    console.log(length*breadth)
}
area(20,10)      

//FUNCTION-RETURN TYPE
function myname()
{
    return "kavya"
}
var a=myname()
console.log(a)     //basic 

function add(a,b)
{
    return(a+b)
}
var a=add(10,20)
console.log(a)

//CONDITIONAL STATEMENTS
//IF ELSE

//basic syntax
if(true)                                                        //when true if is executed 
{                                                                           
    console.log("Its true")
}
else                                                            //when false else is executed
{
    console.log("its false")
}

//exercises
var rain=true
if(rain){
    console.log("its raining")
}
else{
    console.log("enjoy sunshine")
}

var homework=false
if(homework)
{
    console.log("great job")
}
else{
    console.log("finish homework")
}

var cookies=true
if(cookies)
{
    console.log("would you like a cookie?")

}
else{
    console.log("time to bake more cookies")
}

//EXERCISE USING IFELSE AND LOGICAL OPERATORS
var season="fall"
if(season=="spring")
{
    console.log("Enjoy the blooming flowers")
}
if(season=="summer")
{
    console.log("Have fun in the sun")
}
if(season=="autumn" || "season==fall")
{
    console.log("Admire the colorful leaves")
}    
if(season=="winter")
{
    console.log("Bundle up and stay warm")
}    
//IF ,ELSE IF,ELSE
let num1=6
let num2=8
let num3=7
if(num1>num2 && num1>num3){
    console.log("num1 is the greatest")
}
else if(num2>num1 && num2>num3){
    console.log("num2 is the greatest")
}
else{
    console.log("num3 is the greatest")
}
//to find even or odd
let num=8
let result
if(num%2===0){
    result="even"
}
else{
    result=odd
}
console.log(result)

//SWITCH STATEMENTS
//basic switch,break,default
let plan="tuesday"
switch(plan){
    case 'Monday':
        console.log("7am");
        break;
    case 'tuesday':
        console.log("8am");
        break;
    case 'wednesday':
        console.log("9am");
        break;
    case 'thursday':
        console.log("4am");
        break;
    case 'friday':
        console.log("6am");
        break;
    case 'saturday':
        console.log("3am");
        break;
    case 'sunday':
        console.log("5am");
    default:
        console.log("sleep");
}
//Common Code Blocks in switch statements
//Sometimes you will want different switch cases to use the same code
 var day="tuesday"
switch(day){
    case 'Monday':
    case 'tuesday':
    case 'wednesday':
        console.log("7am");
        break;
    case 'thursday':
        console.log("4am");
        break;
    case 'friday':
        console.log("6am");
        break;
    case 'saturday':
        console.log("3am");
        break;
    case 'sunday':
        console.log("5am");
    default:
        console.log("sleep");
}

