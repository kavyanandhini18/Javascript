//FOR LOOP
//basic syntax
for(count=1;count<=5;count=count+1)
{
    console.log("kavya")
}

//to print no from 1 to 10
for(count=1;count<=10;count=count+1)
{
    console.log(count)
}

//to increment by 2
for(count=1;count<=10;count=count+2)
{
    console.log(count)
}

//to print 1 to 10 in reverse order
for(count=10;count>=1;count=count-1)
{
    console.log(count)
}

// to print even no's from 1 to 10
for(count=2;count<=10;count=count+2)
{
    console.log(count)
}

//to print 2 tables
for(count=1;count<=10;count=count+1)
{
    console.log(count +"*2="+count*2)
}



//WHILE LOOP
//condition correct
{
    let num=1
while(num<=10){
    console.log(num);
    num++;
}
}

//condition wrong
{let num=16
while(num<=10){
    console.log(num);
    num++;
}
console.log("Outside loop")
}


//DO WHILE LOOP

//correct
{let num=2
    do{
        console.log(num);
        num++;
    }while(num<=10)
}

//wrong-but executes once 
{let num=11
    do{
        console.log(num);
        num++;
    }while(num<=10)
}

//break keyword in loops
for(num=1;num<=10;num++){
    console.log(num);
    if(num===7){
        break;
    }
    
}
//continue keyword in loops
for(num=1;num<=10;num++){
    console.log(num);
    if(num===7){
        continue;
    }
    
}

//break and continue in samecode note:always continue comes first
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue;   // skip when i = 3
  if (i === 7) break;      // stop when i = 7
  console.log(i);
}



