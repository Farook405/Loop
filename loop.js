//operator
// arithemtic operator  +, -, *, /, %, power
let a= 6;
let b= 8;

console.log(a,b,a+b, a-b, a*b, a/b, a%b, a**b)

//assignment opertor  +=, -=, *=,/=,%=,
let c = 5;
c+=7; // c=c+7; 5+7 =>12
c*=2;
console.log(c)

//increment / decrement  ++, -- 
let d=9;
d++; // d = d+1; -> 10
console.log(d)
d--; // d = d-1; 9
console.log(d)


//comparison operator -> ==,===,>=, <=,<,>,!=, 

//logical operator &&, || , !
let place ='chennai';
let age = 18;
console.log( place == 'chennai' && age >18); //false
console.log( place == 'chennai' && age >=18);  //true
console.log( place == 'chennai' || age >18);  //true
console.log( place != 'chennai' && age <=18);  //false
console.log( place != 'chennai' || age <=18);  //true

console.log( !(place == 'madurai'));  //true

// bitwise opertor -task

let days =['mon','tues','wed','thu','fri'];
// initializtion ; condn ; inc/dec 
for(let i=0;i<days.length;i++){
    console.log(days[i]);
}

for(let i =days.length-1;i>=0;i--){
    console.log(days[i]);
}


let fruits=['apple','orange','mango']
console.log(fruits);
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}

for(let i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}



// while loop (condn check -> stmt executed), do-while loop (stmt executed then condn)
let j=0;
while(j<days.length){
    if(j %2 == 0){
    console.log(days[j])
    }
    j++;
}

let k=0;
do{
    console.log(days[k]) //k=5 ; undefined
    k++;//k=1
}while(k<days.length)

//if,else if else if,else(default)

let day=1;
switch (day) {
    case 0:
        console.log('sunday');
        break; //break out
    case 1:
        console.log('Monday')
        break; // break not present next case,  will get exceuted until break out
    case 2:
        console.log('tuesday')
        break; 
    case 3:
        console.log('wednesday')
        break; 
    case 4:
        console.log('thusday')
        break; 
    case 5:
        console.log('friday')
        break;
    case 6:
        console.log('saturday')
        break;
      default:
        console.log('Invalid inputs')
}