async function sleep(){
    return new Promise ((resolve , reject)=>{
        setTimeout(()=>{
            resolve(45)
        },1000);
    })
}

// (async function main(){
//     let a = await sleep()
//     console.log(a)
//     let b = await sleep()
//     console.log(b);
// })()

// let a = await sleep()
// let b = await sleep()

/*
if we don't want to use await inside async function then we can use IIFE.
immediately invoke function (IIFE)

(async function main(){
    let a = await sleep()
    console.log(a)
    let b = await sleep()
    console.log(b);

})() -->> this is the example of immediately invoke function (IIFE)
*/

function sum(a , b , c){
    return a + b + c;
}

(async function main(){
    let [x , y] = [1 , 5]
    console.log(x , y);

    // let [X , Y , rest] = [1 , 5 , 7]
    // console.log(X , Y , rest);
    
    let [X1 , Y1 , rest1] = [1 , 5 , 7 , 8 , 9 , 10]
    console.log(X1 , Y1 , rest1);

    let [A , B , ...rest] = [1 , 5 , 7 , 8 , 9 , 10]
    console.log(A , B , ...rest);


    // Destructuring in Objects -->>
    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)


    let arr = [1,4,6,]
    console.log(sum(arr[0] , arr[1] , arr[2]));
    console.log(sum(...arr));

    const arr1 = [1,4,77]
    const obj1 = {...arr1}
    console.log(obj1);
    
})()

/*
let [X , Y , rest] = [1 , 5 , 7] -->> here automatically 1 assigned to x , 5 assigned to y and 7 assigned to rest


let [X1 , Y1 , rest1] = [1 , 5 , 7 , 8 , 9 , 10] -->> here automatically 

let [a , b , ...rest] = [1 , 5 , 7 , 8 , 9 , 10] -->> this is the example of Destructuring , where 1 and 5 will be assigned to a and b but 7 8 9 10 all are assigned to ...rest1 and make an new array
*/


/*
    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)

    This iis the example of Destructuring in Objects suppose if we want to print few things from objects then we can make temporary variable and initialise with object after that if we print the temporary variable it will print the objects values
*/

/*
console.log(sum(arr[0] , arr[1] , arr[2]));
console.log(sum(...arr));

both the statement are true and give same result

...arr -->> this is known as spread syntax it means when we pass this syntax inside the sum spread operator opens the arr and sum function can take individual value for addition operation
*/

/*
const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

const sum = async (a, b, c)=>{
    return a+b+c
}

hostig isn't available for let & const
*/