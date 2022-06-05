


document.addEventListener('DOMContentLoaded', function(event) {
  //the event occurred
lights = document.querySelector('link#lightbar');
darks = document.querySelector('link#darkbar');
var loc = window.location.pathname;

if(loc !== "/")
{
lights.setAttribute("href","../../"+lights.getAttribute("href"));
darks.setAttribute("href","../../"+darks.getAttribute("href"));
}

});


window.addEventListener('DOMContentLoaded', function styles() {

var isnight = true;


	function night() {
            lights.disabled = true;
	    darks.disabled = false;
	    isnight=true;
        }

        function day() {
            lights.disabled = false;
	    darks.disabled = true;
	    isnight=false;
        }

//alert(isSiteThemeDark);
if(isSiteThemeDark)
{
  night();
}
else
{
  day();
}

document.querySelector('body').style.visibility = "visible"; //VERY IMPORTANT!!

var toggle = document.querySelector('.js-dark-toggle');
//alert(toggle);
toggle.addEventListener("click", function styles2() {
//alert("toggled");
    if (isnight && toggle.children[0].className === "fas fa-moon") {
        day();
    } else {
        night();
    }
});

});







