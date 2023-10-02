const apl = document.querySelectorAll('.autoplay');
apl.forEach(element => {
    // console.log(element);
    var vid = element.querySelectorAll('video');
    vid.forEach(e => {
        // console.log(e);
        e.muted = true;
        e.play()
    });
});