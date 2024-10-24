// we can make any function Async and make the the promise inside the function Await

// Async function always returns a promise , other values wrapped automatically in promise

/* 
async function harry (){
    return 5;
}

harry().then((x)=>{
    alert(x)
})
*/

async function harry() {

    let delhiweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000)
    })

    let bangaloreweather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000)
    })

    // delhiweather.then(alert)
    // bangaloreweather.then(alert)
    console.log("fetchig delhi weather please wait");
    let delhiw = await delhiweather
    console.log("fetched delhi weather"+delhiw);
    console.log("fetchig bangalore weather please wait");
    let bangalorew = await bangaloreweather
    console.log("fetched bangalore weather"+bangalorew);

    return [delhiw , bangalorew]
}

// harry()


// const cherry = ()=>{
//     console.log("hey i a cherry");
// } -->> here cherry is a normal arrow function so it will be working parallely but it will not wait for function harry completion so that's why before completion of harry function it will be print

// but if we make cherry function as async then it will run parally but when it will return it have an await function make it return so before completion of harry it will not print

const cherry = async ()=>{
    console.log("hey i a cherry");
}

const main1 = async ()=>{
    console.log("welcomme to weather control room")
    let a = await harry()
    let b = await cherry()
    // a.then((value)=>{
    //     console.log(value);
    // })
    // here now a is now await that's why it's automatically return value we don't need to make the value print like promise
}
main1()

// let a = harry()
// let b = cherry()
// // console.log(a);
// a.then((value)=>{
//     console.log(value);
// })