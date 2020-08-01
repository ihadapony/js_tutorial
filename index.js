// console.log('Hello');

/* let, const
 let, const */

 //var
 var BoolAaa123 = true;
 var strings = 'abc';
 var numbers = 22;
 var array = [];
 var objects = {};
//  let aa = 0;

//  console.log(bool);

 //var is function scoped
 //let is block scoped {let } 

 function letScope () {
     if(BoolAaa123) {
         let a = 10;        
         console.log(a);
     }
    //  console.log(a);
 }

 letScope();

 //String Methods

 const string1 = "A string";
 const string2 = 'This,is,valid';
 const string3 = `This is also valid`;
 const age = 20;

 const string4 = new String("This is valid too");

// console.log('Chart at 2 is', string1.charAt(2));

// console.log(typeof age);

// console.log(string1.concat('; ', string2));

// console.log(string2.includes('valid'));

// console.log(string2.indexOf('valid'));

// console.log(string2.replace('is', 'are'));

// console.log(string2.split(','));

// console.log(string2.slice(3, 8));

// console.log(string2.toUpperCase());


const array1 = [1, 'String', {age: 25}];

console.log(array1[2]);

array1.push('pushed');

console.log(array1);

// array1 = [1]; wont work

console.log(array1);

//array methods map(), filter(), reduce()

// for(let i=0; i<array1.length; i++) {
//     console.log(array1[i]);
// }

array1.map(function(element, index) {
    if(element == 'pushed') {
        element = 'checked';
    }
    // console.log('printing from map', element, 'nd the index', index)
});

// console.log(array1)
console.log(array1.filter(function(element){
    return element === 'checjed';
}));

// console.log(array1);

const arr = [1,2,3,4];

let sum = arr.reduce(function(prev, current){
    // console.log('prev', prev);
    // console.log('current', current)
    return prev + current;
}, 10)

// console.log(sum);

let a = 10;
let b = 20;

// console.log(`the sum is ${a + b}`);

console.log('----------------------');

//Object.create();
//using new
//literal syntax

// const person = {
//     isHuman: false,
//     printIntroduction: function() {
//       console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
//     }
//   };
  
//   const me = Object.create(person);

//   console.log(person);

let obj = {};


obj = {
    bool: true,
    array: [1, 'a', {age: 25}],
    string1: 'abc',
    numbers: 22
}

console.log(obj);

console.log(obj.numbers);
console.log(obj['bool']);

//methods

console.log(Object.keys(obj));

obj.numbers = 50;
obj['bool'] = false;

obj.name='John';

console.log(obj);

console.log(new Date().getFullYear());

const isAvailable = true;
// console.log(isAvailable ? getAge() : 'not there')

obj.age = function getAge(name) {
    if(name ==='abhishek') {
        return 30;
    }else {
        return 20
    }
}

// obj.age()

//for, forEach, for in, while

for(const prop in obj) {
    console.log(obj[prop])
}

console.log(window.innerWidth)