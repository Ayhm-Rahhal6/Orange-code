var obj = {
    name: "Adam",
    age: 25,
    gender: "male"
}
console.log(obj.name, obj.age, obj.gender);
//

let someone = {
    name: "Adam",
    age: 25
};

someone.gender = "male";

console.log(someone);
//

let someone1 = {
    name: "Adam",
    age: 25
}

someone1["gender"] = ["male"];

console.log(someone1);
//

var someone2 = {
    name: "Adam",
    age: 25
}
console.log(someone2.name);
//
var someone3 = {
    name: "malek",
    age: 24
}

console.log(someone3["name"]);
//

for (const key in obj) {
    console.log(key + ": " + obj[key]);
}
//

console.log(Object.keys(obj,{}));

//

console.log(Object.values(obj,{}));
//

console.log(Object.entries(obj,{}));
//
var testObj = { name: "Adam", age: 25 };
Object.assign(testObj,{ gender: "male" });
console.log(testObj);
//
Object.freeze(testObj);

testObj.name = "zain";
console.log(testObj);
//

var testObj2 = { name: "Adam", age: 25 };
Object.seal(testObj2);
testObj2.name = "zain";
console.log(testObj2);