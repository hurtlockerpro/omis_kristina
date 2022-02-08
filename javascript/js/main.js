
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


function getResult(x = 10, y = 15){
    // todo 
    console.log('result: ', x + y)
}
getResult(5, 6) // run function
getResult(15, 16) // run function
getResult(25, 26) // run function
getResult(35, 36) // run function
getResult()

//console.log('x new value = ', x);

function getResult2(x, y){
    let result = x + y
    return result
}

console.log('Result2: ', getResult2(1, 1))
console.log('Result1: ', getResult(1, 1))

let newVar = getResult2(100, 200) // return 
console.log('newVar: ', newVar, 1,2,3,4,5,6,7);

//           0        1     2   3        4          5
let cars = ['audi', 'bmw', 10, true, undefined, 'citroen']
cars[4] = 'new car'

console.log('index: ', cars[4]);

let cars2 = {
    cars1:"audi", // string
    cars2:"audi 2", // string
    cars3:"audi 3",
    cars5: 100, // number
    cars4: { // object
        color: "red",
        type: "newType",
        fn: function (x, y){
            return x + y
        }
    }
}

console.log( cars2.cars4.fn(2, 3) );

//  increment  ++x  x++
// 
// 
// iteration count   true                   increment ++ /decrement --
for (let index = 0; index < cars.length; index++) {
    const element = cars[index];
    console.log(element);
}

console.log( Object.keys(cars2) );
console.log( Object.values(cars2) );
console.log( Object.entries(cars2) );

let newCars = Object.entries(cars2)
for (let index = 0; index < newCars.length; index++) {
    const element = newCars[index][1];
    
    if (typeof element == 'object')
    {
        // todo
        let secondLevelArray = Object.entries(element)
        for (let index = 0; index < secondLevelArray.length; index++) {
            const element = secondLevelArray[index][1];
            console.log('2 level: ', element);
        }

    } else {
        console.log('1 level: ', element);
    }
}

/**/
let count = '0'; //prompt("Please enter your elements count...");
if (count != null){
    console.log('element count: ', count);
    // 1
    let result = document.getElementById('result')
    //result.style.backgroundColor = 'red'
    //result.innerHTML = '<h1>Hello world !</h1>'
    // 2 
    let colors = ['green', 'red']
    let colorIndex = -1
    result.addEventListener('click', function(){
        console.log('clicked');

        if (colorIndex == -1 || colorIndex == 1) {
            colorIndex = 0
            result.style.backgroundColor = colors[0]
        } else if (colorIndex == 0) {
            colorIndex = 1
            result.style.backgroundColor = colors[1]
        }
    })




    for (let index = 0; index < count; index++) {
        console.log('iteration: ', index);
        result.innerHTML += generateBox(index)
    }
}

function generateBox(content){
    //'result  = ' + x + y

    return `
    <div class="box">${ content }</div>
    `
}




/* */ 

let box = document.getElementById('box')
let btn = document.getElementById('btn')
let leftWidth = 0;
btn.addEventListener('click', function(){
    leftWidth += 10 
    box.style.left = leftWidth + 'px'
})
