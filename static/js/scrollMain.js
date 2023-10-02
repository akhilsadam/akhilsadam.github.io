//alert("Script loading!");
if(gsap){
//alert("GSAP loaded");
}else{
alert("GSAP FAILED");
}
if(ScrollTrigger){
//alert("st loaded");
}else{
alert("st FAILED");
}
gsap.registerPlugin(ScrollTrigger);
//alert("Script loaded!");


//alert("CustomJS");


var element = document.createElement("div");
//var chili = document.createElement("div");
element.appendChild(document.createTextNode(''));
//chili.className = "chili"; 
//chili.id = "chili"; 
element.className = "bkgd"; 
element.id = "bkgd";
//element.appendChild(chili);
//alert(chili);

let uwp = document.querySelector('.universal-wrapper.pt-3');

document.getElementById('top').insertBefore(element,uwp);

let article = document.querySelector('.article-style');

if(article){
//alert(article);
}else{
//alert("article FAILED");
}

var offHeight = article.scrollHeight;
//var vWidth = document.documentElement.clientWidth;
var verticalHeight = document.documentElement.clientHeight;
let offsetHeight = offHeight + 0.35*verticalHeight;
//let offsetWidth = vWidth;

if(offsetHeight){
//alert(offsetHeight);
//alert("Height success");
}else{
//alert("Height FAILED");
}
document.getElementById('bkgd').style.height = offsetHeight+'px';
//document.getElementById('bkgd').style.width = offsetWidth+'px';
var gHeight = document.getElementById('bkgd').offsetHeight;

if(gHeight){
//alert(gHeight);
//alert("Height success");
}else{
//alert("Height FAILED");
}

const video = document.querySelector("#bgVideo");
let videoDuration;
video.onloadedmetadata = function() {
  console.log("Loaded");
  videoDuration = this.duration;
};

function init() {
  const st = ScrollTrigger.create({
    trigger:".intro",
    start:"top top",
    end:"bottom+=top",
    markers:true,
    pin:true,
    scrub: true,
    onUpdate: (self) => {
      console.log(self.progress);
      videoDuration = videoDuration || 1
      video.currentTime = self.progress * videoDuration;
    }
  })
  }

window.addEventListener("load", init);