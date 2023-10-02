void async function() {
    //get the imported document in templates:
    var templates = document.querySelector('#template')
    templates.innerHTML = await (await fetch('static/templates/audioplayer.html')).text()

    //fetch template2 1 and 2:
    // var template1 = templates.content.querySelector('#t1')
    // var template2 = templates.content.querySelector( '#t2' ) 
    // console.log(template1)
}().then(() => {
    console.log('templates loaded');


    class AudioPlayer extends HTMLElement {
        constructor() {
            super();
            const template = document.querySelector('template');
            const templateContent = template.content;
            const shadow = this.attachShadow({ mode: 'open' });
            shadow.appendChild(templateContent.cloneNode(true));
        }

        connectedCallback() {
            everything(this);
        }
    }

    const everything = function(element) {
        // const shadow = document; //element.shadowRoot;

        // const audioPlayerContainer = shadow.getElementById('audio-player-container');
        // const playIconContainer = shadow.getElementById('play-icon');
        // const seekSlider = shadow.getElementById('seek-slider');
        // const volumeSlider = shadow.getElementById('volume-slider');
        // const muteIconContainer = shadow.getElementById('mute-icon');
        let audio; // = shadow.querySelector('audio')
        // const durationContainer = shadow.getElementById('duration');
        // const currentTimeContainer = shadow.getElementById('current-time');
        // const outputContainer = shadow.getElementById('volume-output');
        let playState = 'play';
        let muteState = 'unmute';
        let raf = null;
        let artwork_url;
        let artistname;
        let artistlink;
        // let album;
        let title;

        // const playAnimation = lottieWeb.loadAnimation({
        //     container: playIconContainer,
        //     path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
        //     renderer: 'svg',
        //     loop: false,
        //     autoplay: false,
        //     name: "Play Animation",
        // });

        // const muteAnimation = lottieWeb.loadAnimation({
        //     container: muteIconContainer,
        //     path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
        //     renderer: 'svg',
        //     loop: false,
        //     autoplay: false,
        //     name: "Mute Animation",
        // });

        // playAnimation.goToAndStop(14, true);

        // const whilePlaying = () => {
        //     seekSlider.value = Math.floor(audio.currentTime);
        //     currentTimeContainer.textContent = calculateTime(seekSlider.value);
        //     audioPlayerContainer.style.setProperty('--seek-before-width', `${seekSlider.value / seekSlider.max * 100}%`);
        //     raf = requestAnimationFrame(whilePlaying);
        // }

        // const showRangeProgress = (rangeInput) => {
        //     if (rangeInput === seekSlider) audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        //     else audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
        // }

        // const calculateTime = (secs) => {
        //     const minutes = Math.floor(secs / 60);
        //     const seconds = Math.floor(secs % 60);
        //     const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        //     return `${minutes}:${returnedSeconds}`;
        // }

        // const displayDuration = () => {
        //     durationContainer.textContent = calculateTime(audio.duration);
        // }

        // const setSliderMax = () => {
        //     seekSlider.max = Math.floor(audio.duration);
        // }

        // const displayBufferedAmount = () => {
        //     const bufferedAmount = Math.floor(audio.buffered.end(audio.buffered.length - 1));
        //     audioPlayerContainer.style.setProperty('--buffered-width', `${(bufferedAmount / seekSlider.max) * 100}%`);
        // }




        const scclass = element.getAttribute('data-class');

        (function(scclass) {

            var widgetIframeAll = document.querySelectorAll(scclass),
                i;

            let widget;
            let currentWidget;

            console.log(widgetIframeAll);

            for (i = 0; i < widgetIframeAll.length; i++) {
                const iframe = widgetIframeAll[i];
                // console.log(iframe);
                iframe.addEventListener("mouseenter", function(event) {

                    if (iframe == currentWidget) {
                        console.log("same widget");
                    } else {
                        console.log("different widget");
                        if (widget) {
                            widget.pause();
                            widget.unbind(SC.Widget.Events.PLAY);
                            widget.unbind(SC.Widget.Events.READY);
                            widget.unbind(SC.Widget.Events.FINISH);
                        }
                        // album = iframe.querySelector('a.sc-link-dark.multiSoundDetails__title').innerHTML;

                        widget = SC.Widget(iframe);
                        audio = widget;
                        /*<!--widget = SC.Widget(idIndex);-->*/

                        widget.bind(SC.Widget.Events.READY, function() {

                            // displayDuration();
                            // setSliderMax();
                            // displayBufferedAmount();

                            widget.bind(SC.Widget.Events.PLAY, function() {
                                // get information about currently playing sound
                                widget.getCurrentSound(function(currentSound) {
                                    artistname = currentSound['user']['username'];
                                    artistlink = currentSound['user']['permalink_url'];
                                    title = currentSound['title'];
                                    console.log(title + ' by ' + artistname + ' began to play');
                                    console.log(currentSound)
                                    artwork_url = currentSound['artwork_url'];
                                    // console.log(artwork_url);
                                    var imageURL = artwork_url.replace("-large", "-t3000x3000")
                                    if (imageURL != "null") { document.querySelector('.sc-art').style.backgroundImage = 'url(' + imageURL + ')'; }

                                    var nv = iframe.contentWindow.navigator;
                                    if ('mediaSession' in nv) {
                                        if (!nv.mediaSession.metadata) {
                                            nv.mediaSession.metadata = new MediaMetadata();
                                        }
                                        console.log('Updating nv.mediaSession with metadata');
                                        nv.mediaSession.metadata.title = title;
                                        nv.mediaSession.metadata.artist = artistname;
                                        nv.mediaSession.metadata.artwork = [
                                            { src: artwork_url.replace("-large", "-t96x96"), sizes: '96x96', type: 'image/jpg' },
                                            { src: artwork_url.replace("-large", "-t128x128"), sizes: '128x128', type: 'image/jpg' },
                                            { src: artwork_url.replace("-large", "-t192x192"), sizes: '192x192', type: 'image/jpg' },
                                            { src: artwork_url.replace("-large", "-t256x256"), sizes: '256x256', type: 'image/jpg' },
                                            { src: artwork_url.replace("-large", "-t384x384"), sizes: '384x384', type: 'image/jpg' },
                                            { src: artwork_url.replace("-large", "-t512x512"), sizes: '512x512', type: 'image/jpg' },
                                        ];
                                        nv.mediaSession.setActionHandler('play', () => {
                                            if (playState === 'play') {
                                                audio.play();
                                                // playAnimation.playSegments([14, 27], true);
                                                // requestAnimationFrame(whilePlaying);
                                                playState = 'pause';
                                            } else {
                                                audio.pause();
                                                // playAnimation.playSegments([0, 14], true);
                                                // cancelAnimationFrame(raf);
                                                playState = 'play';
                                            }
                                        });
                                        nv.mediaSession.setActionHandler('pause', () => {
                                            if (playState === 'play') {
                                                audio.play();
                                                // playAnimation.playSegments([14, 27], true);
                                                // requestAnimationFrame(whilePlaying);
                                                playState = 'pause';
                                            } else {
                                                audio.pause();
                                                // playAnimation.playSegments([0, 14], true);
                                                // cancelAnimationFrame(raf);
                                                playState = 'play';
                                            }
                                        });
                                        nv.mediaSession.setActionHandler('seekbackward', (details) => {
                                            audio.currentTime = audio.currentTime - (details.seekOffset || 10);
                                        });
                                        nv.mediaSession.setActionHandler('seekforward', (details) => {
                                            audio.currentTime = audio.currentTime + (details.seekOffset || 10);
                                        });
                                        nv.mediaSession.setActionHandler('seekto', (details) => {
                                            if (details.fastSeek && 'fastSeek' in audio) {
                                                audio.fastSeek(details.seekTime);
                                                return;
                                            }
                                            audio.currentTime = details.seekTime;
                                        });
                                        nv.mediaSession.setActionHandler('stop', () => {
                                            audio.currentTime = 0;
                                            seekSlider.value = 0;
                                            audioPlayerContainer.style.setProperty('--seek-before-width', '0%');
                                            currentTimeContainer.textContent = '0:00';
                                            if (playState === 'pause') {
                                                playAnimation.playSegments([0, 14], true);
                                                cancelAnimationFrame(raf);
                                                playState = 'play';
                                            }
                                        });
                                    }

                                });

                            });
                        });
                        currentWidget = iframe;
                    }
                });
                // iframe.addEventListener("mouseleave", function(event) {
                //     console.log('pause soundcloud');
                //     if (widget) {
                //         widget.pause();
                //     }
                // });

            }

            // var widgetIframe = document.querySelector(scclass),
            //     widget = SC.Widget(widgetIframe);

            // widget.bind(SC.Widget.Events.READY, function() {
            //     widget.bind(SC.Widget.Events.PLAY, function() {
            //         // get information about currently playing sound
            //         widget.getCurrentSound(function(currentSound) {
            //             console.log(currentSound['title'] + ' by ' + currentSound['artist'] + ' began to play');
            //             console.log(currentSound)
            //             var imageURL = currentSound['artwork_url'];
            //             imageURL = imageURL.replace("-large", "-t3000x3000")
            //             if (imageURL != "null") { document.querySelector('.sc-art').style.backgroundImage = 'url(' + imageURL + ')'; }
            //         });
            //     });
            // });

        }(scclass));


        // if (audio.readyState > 0) {
        //     displayDuration();
        //     setSliderMax();
        //     displayBufferedAmount();
        // } else {
        //     audio.addEventListener('loadedmetadata', () => {
        //         displayDuration();
        //         setSliderMax();
        //         displayBufferedAmount();
        //     });
        // }

        // TODO

        // playIconContainer.addEventListener('click', () => {
        //     if (playState === 'play') {
        //         audio.play();
        //         playAnimation.playSegments([14, 27], true);
        //         requestAnimationFrame(whilePlaying);
        //         playState = 'pause';
        //     } else {
        //         audio.pause();
        //         playAnimation.playSegments([0, 14], true);
        //         cancelAnimationFrame(raf);
        //         playState = 'play';
        //     }
        // });

        // muteIconContainer.addEventListener('click', () => {
        //     if (muteState === 'unmute') {
        //         muteAnimation.playSegments([0, 15], true);
        //         audio.muted = true;
        //         muteState = 'mute';
        //     } else {
        //         muteAnimation.playSegments([15, 25], true);
        //         audio.muted = false;
        //         muteState = 'unmute';
        //     }
        // });

        // audio.addEventListener('progress', displayBufferedAmount);

        // seekSlider.addEventListener('input', (e) => {
        //     showRangeProgress(e.target);
        //     currentTimeContainer.textContent = calculateTime(seekSlider.value);
        //     if (!audio.paused) {
        //         cancelAnimationFrame(raf);
        //     }
        // });

        // seekSlider.addEventListener('change', () => {
        //     audio.currentTime = seekSlider.value;
        //     if (!audio.paused) {
        //         requestAnimationFrame(whilePlaying);
        //     }
        // });

        // volumeSlider.addEventListener('input', (e) => {
        //     const value = e.target.value;
        //     showRangeProgress(e.target);
        //     outputContainer.textContent = value;
        //     audio.volume = value / 100;
        // });
        /* The above code is checking if the browser supports the `mediaSession` API. If it does, it sets the
        metadata for the media session, including the title, artist, and artwork. It also sets up event
        handlers for various media session actions such as play, pause, seek, and stop. These event handlers
        control the behavior of the audio player, such as playing or pausing the audio, seeking forward or
        backward, and stopping the audio playback. */


    }

    customElements.define('audio-player', AudioPlayer);

    // var audio = new Audio("piece");
    // audio.play();

    // function playAudio() {
    //     audio.play();
    // }

    // function pauseAudio() {
    //     audio.pause();
    // }

});