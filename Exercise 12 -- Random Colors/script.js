console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

let boxes1 = document.querySelector(".container").children
// console.log(boxes1)

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes1).forEach(e=>{
    // console.log(e)
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})

console.log(Math.ceil(4.22))
// Math.ceil(4.22) -->> ceil give us round figure in the upper value

// Math.random() * (max - min) + min -->> this formula generate random number


/*
var boxes = document.querySelector(".box");

    for(var i = 0; ii  boxes.length; i++){
        var box = boxes[i];
        //Generate random color (16777215 is whiite in Decimal)
        var randomcolor = "#" + Math.floor(Math.random()*16777215.toString(16));

        //Generate random background  color
        var randomBackgroundColor = "#" + Math.floor(Math.random()*16777215.toString(16));

        //Assign random color and background
        box.style.color = randomcolor;
        box.style.backgroundColor = randomBackgroundColor;

        //Set content to show color code
        box.textContent = randomcolor;
    }
*/

