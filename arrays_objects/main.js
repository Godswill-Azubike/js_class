
// let val = Array("school",true,3,Array(2,4,9));

// console.log(val);

let person = {
    firstName:"John",
    lastName:"Doe", 
    age:46,
    ocp: "dev",
    add_age:function (name) {
        return this.age + 10 + name;
    }
    };

// console.log(person);

document.getElementById("person").innerHTML = person["firstName"]+" "+person['lastName'];
document.getElementById("age").innerHTML = person.add_age(4);

console.log(document);


