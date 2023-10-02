// get all embeds

document.addEventListener('DOMContentLoaded', function(event) {

    var embeds = document.querySelectorAll('embed');
    console.log(embeds);

    // loop through embeds and add event listener

    for (var i = 0; i < embeds.length; i++) {
        embeds[i].addEventListener('click', function(e) {
            // redirect to card page using src attribute
            console.log(this.getAttribute('src'));
            window.location.href = this.getAttribute('src');

        });
    }

});