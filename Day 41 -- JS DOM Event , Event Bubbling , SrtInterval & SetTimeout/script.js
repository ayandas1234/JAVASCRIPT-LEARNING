// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

// Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events

let button = document.getElementById("btn")

// button.addEventListener("click" , ()=>{
//     alert("i was clicked. yayy!!")
//     document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
// })
// when we single click on the button then the innerhtml will be changed because of  click event

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})
// when we double click on the button then the inerhtml will be changed because of  dblclick event


button.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
})
//if we right click over the button it will show an message and do't show the context menu because of contextmenu event



button.addEventListener("keydown", (e)=>{
    console.log(e)
})
// button.addEventListener("keydown", (e)=>{
//     console.log(e)
// }) -->> here if we click the button then whatever key we press in our keyboard it will print in console panel


document.addEventListener("keydown", (e)=>{
    console.log(e)
    console.log(e.key , e.keyCode)
})
// document.addEventListener("keydown", (e)=>{
//     console.log(e)
// }) -->> here without click the button whatever key we press in our keyboard it will print in console panel



// here the arrow function part takes object when we pass
