console.log("Hey this is tutorial 55");

var a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

console.log(a +  b + 8);
console.log(c);
console.log(typeof a, typeof b, typeof c);
{
    let a = 66;
    console.log(a)
}
console.log(a)
const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

// null type show as object

//defining object
let o = {
    "name": "Harry",
    // we can write name inside double quatation or without double quatation but the object variable name contains space then that variiable should be inside double quatation like -->> job code , here between job and code is space so we have to make sure job code reside in double quatation

    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
// o.salary = "100crores"; -->> adding ore object like this and it is valid
// syntax -->> object name.object variable = object value

console.log(o);

o.salary = "500crores";
o.name = "Ayan";
// o.salary = "500crores"; o.name = "Ayan"; -->> we can overwrite object value this way

console.log(o);
