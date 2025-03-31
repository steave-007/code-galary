// // function exm(){
// //     var x = 5;
// //     console.log(x)
// // }

// // exm();-------------var 


// // let x= 10
// // if (true) {
// //     let y = 20 

    
// // }
// // console.log(x)
// // console.log(y)==============let

// // function l (){  

// // let x = 3
// // x = 5

// // console.log(x)
// // }


// // l()



// // function con(){

// //     const x =10
    
// //     // x=20
// //     console.log(x);
// // }
// // con()




// // const person={
// //     "name":"punit",
// //     "age":20
// // }
// // person.name="sunny"
// // console.log(person.name)-----------const


// // let number1 = 4 
// // let number2 = 3
// // // let number3 = 30 

// // // let sum = number1+number2-number3;
// // let sum = number1**number2;
// // console.log(sum)-----opp


// // let x=1
// // let y=2
// // let z=1

// // // console.log( x&&z)
// // console.log( z&&y)
// // // console.log( x&&y)
// // // console.log( x==z)




// // let isSleeping = true;

// // let isRunning = false;

// // if(isRunning){
// //     console.log("He is sleeping");
// // }else{
// //     console.log("He is Running");
// // }


// // let person = {
// //     name: "Mayank",
// //     age: 21,
// //     country : "India",
// //     message: function() {
// //         console.log("Hello, my name is " + person.name);
// //         return this.age
// //     }
// // };

// // person.message(); 


// // function sum(x, y){
// //     let result = x / y;
// //     return result;
// // }



// // var add = function(x, y) {
// //     return x + y;
// // };

// // output = add(3, 8);
// // console.log(output);   


// // const fruits = ['apple', 'orange'];

// // // Inserting 'banana' at index 1
// // fruits.splice(1, 0, 'banana');
// // console.log(fruits); // Output: ['apple', 'banana', 'orange']



// const products = [
//     {
//         id: 1,
//         name: "Product A",
//         price: 10 
//     },
//     {
//         id: 2,
//         name: "Product B",
//         price: 20 
//     },
//     {
//         id: 3,
//         name: "Product C",
//         price: 30
//     },
// ];

// const expensiveProducts = products.filter((product) => product.price > 15);

// console.log(expensiveProducts);

// /* Output : 
// [
//   { id: 2, name: 'Product B', price: 20 },
//   { id: 3, name: 'Product C', price: 30 }
// ]
// */


// let person = {
//     firstName : "Mayank",
//     lastName : "Pandey",
//     age : 21,
//     hobbies : ["reading", "writing", "painting"],
//     message : function(){
//         console.log("Hi my name is " + this.firstName);
//     }
// };

// let ans = new Object(person);

// console.log(ans);
// let message =person.message()


function multiplier(factor) {
    return function(number) {
        return number ** factor;
    };
}

const double = multiplier(2);
console.log(double(6));