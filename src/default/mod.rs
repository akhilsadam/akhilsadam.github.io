use yew::prelude::*;
use yew_router::prelude::*;

pub fn notfound() -> Html
{
    html!
    {
        <a href='/'>
            <div class="fullscreen text-center z-container place-center layer hover-ctrl slow-color-rotate">
                <div class="autoplay hover-agent fullscreen layer-center " allow="autoplay">
                    <video class="layer" loop=true autoplay=true muted=true name="media" autostart="1" controls=false>
                        <source src="static/media/notfound.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div class="difference hover-cmd">
                    <h1 class="huge">{"terraforming in progress"}</h1> //dev at work // ongoing dev // designing layout // prototyping landforms
                    <div class="z-container">
                        <h3 class="timeout large">{"exploration underway"}</h3>
                        <h3 class="delayed alert large"><span class="delayed-blink"><i class="fa-solid fa-triangle-exclamation"></i></span>{"  no content available yet ; click to return    "}</h3>
                    </div>
                </div>
                <script type="text/javascript" src="static/js/autoplay.js"></script>
            </div>
        </a>
    }
}


pub fn music() -> Html
{
    html!
    {
        <div class="fullscreen z-container">
            <div>
                //<div class="fullscreen bkgd-music" style="background-image: url(/static/img/music0.png);"></div>
                <div class="sc-art"></div>
            </div>
            <div>
                //<iframe class="sc-widget" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/lightwaveofficial" width="100%" height="465" scrolling="no" frameborder="no"></iframe>
            </div>
            <div id="template"/>
            //<audio-player data-class = ".sc-widget"> </audio-player>
            //<script type="module" src="static/js/audioplayer.js"></script>
        </div>
    
    }  
}
