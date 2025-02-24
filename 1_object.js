//1번 퀘스트
var myPet = {
    name:"Momo",
    type:"Cat"
}

console.log("name : " + myPet.name + ", type : " + myPet.type)

//2번 퀘스트
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log("Hello, my name is " + this.name + " and I am " + this.age + "years old.");
    }
}

const person = new Person("Jane Doe", 25);
person.greet();
