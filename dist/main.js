/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "b", function() { return foo; }); var TaskCollection = function TaskCollection(tasks) {
  if ( tasks === void 0 ) tasks = [];

  this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump (){
  console.log(this.tasks);
};

/* harmony default export */ exports["a"] = TaskCollection;

var foo = 'hello';


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TaskCollection__ = __webpack_require__(0);


var task = new __WEBPACK_IMPORTED_MODULE_0__TaskCollection__["a" /* default */](['read', 'write']);
task.dump();
c(__WEBPACK_IMPORTED_MODULE_0__TaskCollection__["b" /* foo */]);
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
function c(param){
    console.log(param);
  }


/***/ }
/******/ ]);
//# sourceMappingURL=main.js.map