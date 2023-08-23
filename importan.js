
// first 
// let count = 20;
// count += 10; its possible to change or set
// console.log(count);
// second 
// const num = 20;
// num = num + 10; its not possible set or change
// console.log(num)


// third
// const number = [20, 497, 2342, 243, 554];
// console.log(number); its possible

// number[2] = 44 its possible
// number.push(32, 2, 45, 56) its possible

// number = [29, 34, 56]; not possible
// console.log(number);



// object
// its possible if reassign const variable
// const friend = {
//     name: 'sakil',
//     roll: 3838,
//     age: 18
// }

// not possible
// friend = {
//     name: 'hasan'
// }

// its possible
// friend.name = 'hasan'

// console.log(friend)

// its possible if reassign let variable
// let bondo = {
//     name: 'sakil',
//     roll: 3838,
//     age: 18
// }
// bondo ={
//     name: 'hasan'
// }
// console.log(bondo)


// loop
// let sum = 0;
// for(let i = 0; i < 10; i++){
//     const num = i;
//     sum += num;
// }
// console.log(sum)



// default 

// function add(num1 = 0, num2 = 0, num3 = 0){
//     const result = num1 + num2 + num3;
//     console.log(num1, num2, num3, result)
//     return result;
// }

// // const sum = add(10, 30);
// const sum = add(12,10);



// function fullName(firstName, lastName = ''){
//     const full = firstName + ' ' + lastName;
//     return full;
// }

// function friend(numbs = []){

// }

// function person(human = {}){

// }


// template
// const first = 'Sakil';
// const second = 'hasan';

// const name = first + ' ' + second;
// console.log(name)

// const a = 10;
// const b = 20;
// const nameFull = `the sum ${a} and ${b} is ${a + b}`;
// console.log(nameFull);

// const blog = `hello Sir,
// I am Your Student.
// I am new for this Course.
// Please Sir give some Easy Assignment. We are Try our best. Sir please give 70/60 mark for next two Assignment.`

// console.log(blog);

// const number = [42,34,55,77];
// const person = {
//     name: 'john',
//     agg: 23
// }

// const result = `name: ${person.name} age: ${number[1] + person.agg}`
// console.log(result);



// array 

// function add (a, b){
//     const result = a + b;
//     return result;
// }
// one
// function add (a, b){
//     return a + b;
// }
// // two
// const add2 = function(a, b){
//     return a + b
// }
// // three
// const add3 = (a, b) => a + b;


// const sum = add(20, 49);
// const sum2 = add2(20, 49);
// const sum3 = add3(20, 49);
// console.log(sum)
// console.log(sum2)
// console.log(sum3)

// const add4 = (a, b, c, d, e, f, h) => a + b + c + d + e + f + h;
// const sum4 = add4(12, 32, 12, 13, 15, 16, 12);
// console.log(sum4);



// const add5 = (k, u) => k * u;
// const num5 = add5(12, 10);
// console.log(num5);

// const difference = (x, y) => x - y;
// const multi = (a, b, c) => a * b * c;

// const single = one => one.age;
// const student = {
//     name: 'Sirajul',
//     age: 12
// }
// const personAge = single(student)

// console.log(personAge)



// const searchThird = number => number[2];
// const third = searchThird([5, 7, 44, 77, 46])
// console.log(third);


// const double = num => num * 2;
// const doubleNum = double(10);
// console.log(doubleNum);


// const getPI = () => Math.PI
// console.log(getPI())

// // multiple line calculation so use return 
// const doMath = (x, y, z) => {
//     const sum = x + y + z;
//     const multi = x * y * z;
//     const result = sum + multi;
//     console.log(sum, multi)
//     return result;
// }
// const number2 = doMath(4, 6, 8);
// console.log(number2);


// max number
// const maxNum = Math.max(30,789,644,4232,2234,5656,70)
// console.log(maxNum);

// const number = [10, 4, 234, 12, 123, 12, 76];
// // not a number NaN 
// const arrayNum = Math.max(number);
// console.log(arrayNum);

// // but problem solve if use Math.max(...number);
// const numberMax = Math.max(...number); 
// console.log(numberMax);

// // jodi number2 namer array theke sob number Element alada korte chai taholeo three dot (...number2) dibo

// const number2 = [12, 40, 50, 34, 67];
// console.log(...number2);


// // spread operator to copy

// // const nums1 = [6, 2, 8, 3, 8]
// // const nums2 = nums1;
// // nums2.push(22);
// // console.log(nums1);
// // console.log(nums2);

// const nums1 = [6, 2, 8, 3, 8]
// const nums2 = nums1;
// const final = [...nums1]  // copy
// console.log(final);
// nums2.push(30);
// console.log(final);
// console.log(nums1)

// // advance
// const newNum = [...nums1, 44]; //copy and set or add
// console.log(newNum)


// // destructure

// const actor = {
//     name: 'Ananto',
//     age: 30,
//     phone: '01717653844',
//     money: 27034349301
// }
// // normal
// // const phone = actor.phone;
// // const name = actor.name;
// // const age = actor.age;

// // destructure chaile object property value change kora jabe
// const {phone, age: boyos} = actor


// console.log(phone);
// // console.log(age);
// console.log(boyos);

// // destructure array

// // const numbers = [54, 96]
// // const [first, second] = numbers;

// // x= 12 y= 56
// const [x, y] = [12, 56];


// //
// function getDouble(a, b){
//     return [a*2, b*2];
// }

// const [first, second] = getDouble(5, 6);
// console.log(first, second);




// // keys and values
// const obj = {
//     name: 'glass',
//     color: 'red',
//     price: 12,
//     isCleaned: true
// }

// console.log(obj);

// keys gula dibe object er
// const keys = Object.keys(obj)
// console.log(keys)

// // values gula dibe object er
// const values = Object.values(obj)
// console.log(values);

// // entries mane keys and values duto dibe
// const entries = Object.entries(obj);
// console.log(entries)

// delete korte lokhbo
// delete obj.isCleaned;
// console.log(obj)

// notun Object bananor niyom

// const {isCleaned, ...shortObj} = obj;
// console.log(shortObj);


// unfreeze
// obj.money = 2344
// delete obj.price;
// delete obj.color;
// console.log(obj);

// freeze
// Object.freeze(obj);
// obj.isCleaned = false;
// delete obj.price;
// delete obj.name;
// console.log(obj);

// seal mane modify hobe delete/add kora jabe na

// Object.seal(obj);
// obj.price = 6777;
// delete obj.price;
// console.log(obj);




// loop last video

// const numbers = [2, 5, 8, 3, 9];
// for(const num of numbers){
//     console.log(num);
// }

// const king = 'Siraj Ud Doula';
// for (const char of king) {
//     // console.log(char);
// }

// const obj = {
//     name: 'glass',
//     color: 'red',
//     price: 12,
//     isCleaned: true
// }
// this not work
// for(const key of obj){
//     console.log(key);
// }

// work
// for(const key in obj){
//     const value = obj[key];
//     console.log(key, value);
// }

// try Object keys
// const keys = Object.keys(obj);
// console.log(keys);
// for(const key of keys){
//     const value = obj[key]
//     console.log(key, value);
// }

