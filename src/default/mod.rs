use yew::prelude::*;
use yew_router::prelude::*;

pub fn notfound() -> Html
{
    html!
    {
        <a href='/'>
            <div class="fullscreen center z-container place-center layer hover-ctrl slow-color-rotate">
                <div class="autoplay hover-agent" allow="autoplay">
                    <video class="expand" loop=true autoplay=true muted=true name="media" autostart="1" controls=false>
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

