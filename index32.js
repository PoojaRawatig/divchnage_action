window.alert("click on this button")
a = window.prompt(" do you want to click any button");
if( a==0){
    console.log("thank your clicking")
}else{
    console.log("No")
}



let btn = document.getElementById('btn');
btn.addEventListener('click', func1);
function func1(e){
    console.log(" thanks for click this button",e)
}
// // Set the display property of the element to none using CSS
// document.getElementById("container").style.display = "none";

// // Remove the display property after the page loads using the DOMContentLoaded event
// document.addEventListener("DOMContentLoaded", function() {
//   document.getElementById("container").style.display = "block";
// });



function createDiv() {
    let div = document.createElement("div");
    div.innerHTML = "This is a div element";
    document.getElementById("container").appendChild(div);
    document.getElementById("container").style.color='red';
    document.getElementById("container").style.fontSize='35';

}

function createSpan() {
    let span = document.createElement("span");
    span.innerHTML = "This is a span element";
    document.getElementById("container").appendChild(span);
    document.getElementById("container").style.color='orange';
    document.getElementById("container").style.fontsize='90';
    // document.getElementById("container").style.display='none';

}

function createHeading() {
    let h1 = document.createElement("h1");
    h1.innerHTML = "This is a heading element";
    document.getElementById("container").appendChild(h1);
    document.getElementById("container").style.color='brown';
    // document.getElementById("container").style.fontSize='35';
}

function createParagraph() {
    let p = document.createElement("p");
    p.innerHTML = "This is a paragraph element";
    document.getElementById("container").appendChild(p);
    document.getElementById("container").style.color='green';
}
// let menu = document.getElementById('menu');
// while (menu.firstChild) {
//     menu.removeChild(menu.firstChild);
// }
function removeElement() {
    let parent = document.getElementById("container");
    let child = parent.lastElementChild;
    parent.removeChild(child);
}
