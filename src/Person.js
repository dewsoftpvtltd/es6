class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet(){
    return this.name + ' says: Its my '+ this.age+'nd birthday!';
  }
}

var me = new Person('Basit',32);
console.log(me.greet());
