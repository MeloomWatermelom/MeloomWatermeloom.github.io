// 
// var - og, function scoop
// let - block scoop, can be re-declared
// const - block scoop, cannot be re-declared, unless it is an object, can change property

// function scoop - avaliable anywhere inside of the function that it is declared in
//      if no function then it becomes globally scoop
//      can be redeclared to another value
//      creates the variable even if its befoere use, starts as undefined

// block - only available inside the block it is declared in
//      cannot call it from outside of the function
//      cannot be re-defined 

const second = document.querySelector(".second");
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");

// object/constructor ( method ( function() ) )


// this keyword references to the object we are working with


function setDate(){
    const now = new Date();
    
    const secondsNow = now.getSeconds();
    const minutesNow = now.getMinutes();
    let hoursNow = now.getHours();
    // let hrTime = "am"
    // if (hoursNow > 12) {
    //     hoursNow = hoursNow - 12;
    //     hrTime = "pm"
    // }
    
    const secondsDegrees = (now.getSeconds() * 6) + 90;
    const minutesDegrees = (now.getMinutes() * 6) + 90;
    const hoursDegrees = (now.getHours() * 30) + 90;
    
    second.style.transform = `rotate(${secondsDegrees}deg)`;
    minute.style.transform = `rotate(${minutesDegrees}deg)`;
    hour.style.transform = `rotate(${hoursDegrees}deg)`;
};

setInterval(setDate, 1000);

//calls on the moment.js lib


//shows the date, adds the date from js to html p element with class of date
document.querySelector(".date").innerHTML = moment().format('ll');

//
var timeEl = document.querySelector(".time");

function timeUpdate(){
    const now = moment();
    //selects the element in html and replace it with the content after = 
    timeEl.innerHTML = now.format('LTS'); 
    //element.innerHTML
};

setInterval(timeUpdate, 1000);

