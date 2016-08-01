'use strict';

var _TaskCollection = require('./TaskCollection');

var _TaskCollection2 = _interopRequireDefault(_TaskCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var task = new _TaskCollection2.default(['read', 'write']);
task.dump();

//
// function log(strategy){
//   strategy.handle();
// }
// class Strategy{
//   handle(){
//     c('Did you like this strategy?');
//   }
//
// }
// let strategy = new Strategy;
// log(strategy);


// class User{
//   constructor(name, email){
//     this.name = name;
//     this.email = email;
//   }
//
//   changeEmail(newemail){
//     this.email = newemail;
//   }
//
//   static register(...args){
//     return new User(...args);
//   }
//
//   get foo(){
//     return this.name;
//   }
//
// }
//
//
//
// var basit = User.register('ali', '@hamdani');
//
// basit.changeEmail('@basit');
//
// console.log(basit.foo);


// function greet({name, age}){
//   console.log(`Hello ${name}, you are ${age}`)
// }
//
//
// let person  = {
//     name: 'Basit',
//     age: 32
//   };
//
// greet(person)


// function getData({results, count}){
//   console.log(results, count);
// }
//
//
//
//
//
//
// getData({
//   name: 'Arfa',
//   age: 16,
//   results: ['foo', 'bar'],
//   count: 60
// });


// function getPerson(){
//   let name = 'Basit',
//       age = 32;
//
//   return {
//     name,
//     age,
//     greet(){ return `hello from ${name}`;}
//
//   }
// }
//
//
// console.log(getPerson().greet());
// var name = 'Saima';
// let template = `
// <div><h2> ${name} </h2>
// </div>`.trim();
//
// console.log(template);
//$('#test').html = template;

// $(document).ready(function(){
//     $("button").click(function(){
//         $("#test").html(template);
//     });
// });

// function fire(bool) {
//   if(bool){
//     var foo = 'bar';
//     console.log(foo);
//   }else{
//     console.log(foo);
//
//   }
// }
//
// fire(false);

// const names = ['john', 'tony', 'sheela'];
// names.push('arfa','saadia');
//
// console.log(names);

// class TaskCollection{
//
//   constructor(tasks = []){
//     this.tasks = tasks;
//   }
//
//   log(){
//     this.tasks.forEach((task) =>console.log(this));
//   }
// }
//
// class Task{
//   constructor(task){
//     this.task = task;
//     console.log(this.task);
//   }
// }
//
// new TaskCollection(
//   [
//     new Task('read'),
//     new Task('write'),
//     new Task('learn')
//   ]
// ).log();


// let names = ['arfa', 'saadia', 'saima'];
//
// names = names.map(name => name + " is cooler");
//
// console.log(names);


// function applyDiscount(cost, discount = 10){
//   return cost - (cost*discount/100);
// }
//
// alert(applyDiscount(5679));


// function sum(...numbers){
//   return numbers.reduce((prev,current)=> prev + current);
// }

//alert(sum(1,3,5,43)); //9


// function sum(x,y){
//   return x+y;
// }
//
// let numbs = [11,2];
// alert(sum(...numbs));
function c(param) {
    console.log(param);
}