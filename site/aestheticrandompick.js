var overall = document.getElementById("overalltheme");
var skincolor = document.getElementById("skin color");
var eyecolor = document.getElementById("eye color");
var haircolor = document.getElementById("hair color");
var style = document.getElementById("style");
var accessories = document.getElementById("accessories");
var heading = document.getElementById("heading");
var randomm = document.getElementById("random");
var header = document.getElementById("header");
function random (){
    var random = Math.floor(Math.random()*11);
    return random;
}
function overallchange(){
    heading.style.backgroundColor = "palevioletred";
    header.style.backgroundColor = "palevioletred";
    randomm.style.backgroundColor = "palevioletred";
    randomm.style.color = "palegreen";
}
function skincolorchange(){
    heading.style.backgroundColor = "orange";
    header.style.backgroundColor = "orange";
    randomm.style.backgroundColor = "orange";
    randomm.style.color = "palegreen";
}
function eyecolorchange(){
    heading.style.backgroundColor = "paleturquoise";
    header.style.backgroundColor = "paleturquoise";
    randomm.style.backgroundColor = "paleturquoise";
    randomm.style.color = "rosybrown";
}
function haircolorchange(){
    heading.style.backgroundColor = "saddlebrown";
    header.style.backgroundColor = "saddlebrown";
    randomm.style.backgroundColor = "saddlebrown";
    randomm.style.color = "palegreen";
}
function stylechange(){
    heading.style.backgroundColor = "violet";
    header.style.backgroundColor = "violet";
    randomm.style.backgroundColor = "violet";
    randomm.style.color = "palegreen";
}
function accessorieschange(){
    heading.style.backgroundColor = "cyan";
    header.style.backgroundColor = "cyan";
    randomm.style.backgroundColor = "cyan";
    randomm.style.color = "rosybrown";
}