//TEST
console.log('Hello');

// VARIABLES 

//calculate VAT
var a = 100
var price = a *1.21

console.log(price);

// calculate surface of circle with radius 10
var a = 10
var surface = 2 * 3.14 * a
console.log(surface);

// calculate the seconds from hh:mm:ss
var hms = '1:01:01';
var a = hms.split(':');
var seconds = a[0]*3600+a[1]*60+a[2]*1;
console.log(seconds);

// CONDITIONS 
//example

if (1 < 4) {  //is correct
	var a = 3
} else if (9 < 5) { //not correct
	var a = 5
} else {  //first condition is met
	var a = 6;
}
console.log(a);

//if hour is between 6h and 12h: Good morning!
// if hour is between 12h and 18h : Good afternoon!
// Otherwise: Good evening!
let hour = 12;

if (hour >= 6 && hour < 12) {
    console.log('Good morning!');
}
else if (hour >=12 && hour < 18) {
    console.log('Good afternoon!');
}
else 
    console.log('Good evening!');

//printshop
// A print shop charges 0.12 € the ten first copy, 0.11 € the next 20 
//and 0.10 € from there. 
//Write an algorithm which given a number of copies and calculates the price.

let copies = 9

if (copies >=0 && copies <=10)
    console.log(0.12 * copies);
else if(copies >=11 && copies <31)
    console.log(0.11 * copies);
else 
    console.log(0.10 * copies);

// days number

let day = 4

if (day == 1)
    console.log('Monday')
else if (day ==2)
    console.log("Tuesday")
else if (day ==3)
    console.log("Wednesday")
else 
    console.log("Thu, Fri, Sa or Su");

// boolean cinema

let discount = false

if (discount==true) 
    console.log("8euro")    
else 
    console.log("10 euro");


//maximum

//var a = 7;
//var b = 9;
//var c = 10; 

//if (x>b && a>c) {
//   console.log(x);
    




//Dice
let dicea = 1
let diceb = 1
let dicec = 1

if (dicea == diceb && dicea== dicec) 
    console.log('equal');

else 
    console.log('not equal');    

// Dice correct exersice

let dice1 = Math.ceil(Math.random()*6);
let dice2 = Math.ceil(Math.random()*6);
let dice3 = Math.ceil(Math.random()*6);

console.log(dice1, dice2, dice3);

if ((dice1 == dice2) && (dice2 == dice3)) {
    console.log('3 are the same');
}
else if ((dice1 == dice2) || (dice2 == dice3) || (dice1 == dice3)) {
    console.log('2 are the same');
}

else {
    console.log('none are the same')
}

// LOOPS
// FOR (if) LOOP
// print 5 times Hello 

for (let i = 0; i < 5; i++) {
    console.log("Hello World");
}
// output 0, 1, 2, 3, 4
for (let i = 0; i < 5; i++) {
    console.log(i);

}

// odd (oneven) numbers between 1 to 5 
for (let i = 1; i <=5; i++) {
    if (i % 2 !==0) console.log(i); // als je deelt door 2 en het is niet 0 =oneven
}

// break the loop 
for (let i = 1; i <= 5; i++) {
    console.log('test' + i);
    if (i === 3) break;   // stop loop als je aan 3 bent
}

// loop through array
const names = ['Jan', 'Piet', 'Joris', 'Corneel'];

for (let i = 0; i < names.length; i++)
console.log(names[i]);



dice1 == dice2 && dice2 || dice3