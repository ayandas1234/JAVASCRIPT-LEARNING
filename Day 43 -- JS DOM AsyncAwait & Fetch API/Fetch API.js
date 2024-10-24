// let p = fetch("https://goweather.herokuapp.com/weather/Curitiba")
// let p = fetch("https://catfact.ninja/fact")
let p = fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")
// here p is a promise


//code 1 -->>>
// p.then((value1)=>{
//     console.log(value1.status);
//     console.log(value1.ok);
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })


//code 2 -->>>
// p.then((response)=>{
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })


//code 3 -->>>
p.then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    console.log(response.headers);
    return response.json()
}).then((value2)=>{
    console.log(value2)
})

// both code 1 and code 2 , code 3 are same

/*
whenever we fetch somethingwe get a promise and that promise resolve in another promise and that value will be final result

value1.json is a promise and that will resolve innside json response 
*/

// p.then((response)=>{()=>return response.json()}).then((response)=>{
//     console.log(response);
// })

/*  
AJAX stands for Asynchronous JavaScript and XML. It's a set of web development techniques that use JavaScript, HTML, XML, and CSS to create interactive websites
 
fetch getting a response in 2 stages
an object of response contain two things staus and ok
status -->> http status code ,eg.200
ok -->> boolean , ture if http is in the range b/w 200 to 299
*/


/* 
More Content on -->> https://www.google.com/search?q=what+is+return+response.json+in+javascript+with+example&sca_esv=a4a60f4cb81ff8e0&rlz=1C1CHWL_enIN1008IN1008&sxsrf=ADLYWIJhWdPaf4C_tk8rJQC8HNQ1pSaulg%3A1728661235842&ei=80YJZ5SHM_KUseMPi9W38QU&oq=what+is+return+response.json+in+javascript+&gs_lp=Egxnd3Mtd2l6LXNlcnAiK3doYXQgaXMgcmV0dXJuIHJlc3BvbnNlLmpzb24gaW4gamF2YXNjcmlwdCAqAggAMgUQIRigATIFECEYoAFI9wpQ-QFY-QFwAHgCkAEAmAGEAqABhAKqAQMyLTG4AQHIAQD4AQGYAgKgApQCwgIEEAAYR5gDAIgGAZAGCJIHBTEuMC4xoAeyAw&sclient=gws-wiz-serp

 */