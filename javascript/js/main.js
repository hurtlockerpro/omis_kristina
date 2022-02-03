
// 
/* 
fv f
*/
let x = 10 // 
// x = "hello"

console.debug('hello from javascript file')

let firstname = "Vladimir"

console.log(firstname + x)
console.log(x + x)

// number
// string
// boolean -> true -> 1  / false -> 0
let isLocked = true
console.log(x + isLocked)

// undefined 
let u
 // ...
//u = 10

// NaN -> isNaN()
console.log( x / 'a')

// null
let m = null

// object 
let obj = []
let obj2 = {}

console.log('x: ', typeof x);
console.log('isLocked: ', typeof isLocked);
console.log('m: ', typeof m);
console.log('obj: ', typeof obj);
console.log('obj2: ', typeof obj2);
console.log('u: ', typeof u);
console.log('firstname: ', typeof firstname);

//   true 
if (x > 20)
{
    console.log('x is grater than 1');
} else if (x == 10) { 
    console.log('x is equal to 10');
} else { // 1 -> false
    console.log('x is not grater than 1');
}

switch (x) {
    case 10:
        console.log('x = 10');
        break;
    case 20:
        console.log('x = 20');
        break;
    default:
        
        break;
}

console.log('');