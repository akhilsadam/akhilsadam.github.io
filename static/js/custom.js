stopALL();


function resetHeight(){

let article = document.querySelector('.inner');
//document.querySelector('#top');
let main = document.getElementById('main');

//if(main){
//alert("main");
//}else{
//alert("main FAILED");
//}

//var pseudoBeforeHeight = window.getComputedStyle(article, ':before').height;
//var offHeight = parseInt(pseudoBeforeHeight);
var offHeight = article.scrollHeight;
//var vWidth = document.documentElement.clientWidth;
var verticalHeight = document.documentElement.clientHeight;
let offsetHeight = offHeight + 50;
// + 0.25*verticalHeight;
//let offsetWidth = vWidth;

//alert(offHeight);

let offd = offsetHeight + 'px'

//if(offsetHeight){
//alert(offsetHeight);
//alert("Height success");
//}else{
//alert("Height FAILED");
//}

main.style.setProperty("height",offd, "important");
main.style.setProperty("height",offd, "important");
//document.getElementById('main').style.setProperty("", "red", "important"); = offsetWidth+'px';
var gHeight = main.offsetHeight;

console.log("Height");

//if(gHeight){
//alert(gHeight);
//alert("Height success");
//}else{
//alert("Height FAILED");
//}
}




document.addEventListener("DOMContentLoaded", function(event) {
	resetHeight();	
	stopALL();
});

window.addEventListener('load', function() {
	resetHeight();
	//document.querySelector(".skill").addEventListener("hover",resetHeight());
	stopALL();
});


function stopALL(){
	const scs = document.querySelectorAll('.music-l');
scs.forEach(element => {
console.log(element);
var widget1 = SC.Widget(element);
	widget1.pause();
});
	const scs2 = document.querySelectorAll('.music-d');
scs2.forEach(element => {
console.log(element);
var widget2 = SC.Widget(element);
	widget2.pause();
});

}

function playAA(){
console.log('PLAYAA');
	const scs = document.querySelectorAll('.music-l');
scs.forEach(element => {
console.log(element);
var widget1 = SC.Widget(element);
	widget1.pause();
});
	const scs2 = document.querySelectorAll('.music-d');
scs2.forEach(element => {
console.log(element);
var widget2 = SC.Widget(element);
	widget2.pause();
});


var toggle = document.querySelector('.js-dark-toggle');
    if (toggle.children[0].className === "fas fa-moon") {
scs.forEach(element => {
console.log(element);
var widget1 = SC.Widget(element);
	widget1.play();
document.querySelector('.mMain').style.setProperty('background', 'url("../img/a.png")', 'important');
document.querySelector('.mMain').style.setProperty('background-position', '50% 60%', 'important');
});
    } else {
scs2.forEach(element => {
console.log(element);
var widget2 = SC.Widget(element);
	widget2.play();
document.querySelector('.mMain').style.setProperty('background', 'transparent', 'important');
});
    }

}
