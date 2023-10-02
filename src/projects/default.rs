use yew::{html, Html};

// use gloo_net::http::Request;

// fn get_string_from_file(path: &str) -> Result<String, JsValue> {
//     // Create a fetch request for the file.
//     // Fetch the file.
//     let response = Request::get(path).send();

//     // Get the response body.
//     let body = response.text().await.unwrap();

//     // Convert the response body to a string.
//     let string = body.as_str().unwrap();

//     Ok(string)
// }

// static PROJECT_DIR: Dir = include_dir!("src/");

// pub fn project(mdpath:&str) -> Html
// {

//     // for entry in PROJECT_DIR.files() {
//     //     let obj = JsValue::from(entry.path().display().to_string());
//     //     log!("Found {}", obj);
//     // }

//     let path = "../projects/".to_owned() + mdpath  + ".md";//"../content/".to_owned() +
//     log!("path: {}", &path);
//     // let lib_rs = PROJECT_DIR.get_file(path).unwrap();
//     let data = read_to_string(path).unwrap();
//     md_gen(&data)
// }

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

pub fn main() -> Html
{
    html!
    {
        <div class="fullscreen z-container">
        <div class="visor">
        </div> 
        <div class="fullscreen bkgd-music-0" style="background-image: url(/static/img/music0.png); opacity: 0.3;"></div>
        <div class="fullscreen bkgd-music"></div>
    </div>
    }
}

// #[wasm_bindgen(module = "static/js/audioplayer.js")]
pub fn music() -> Html
{
    html!
    {   
        <div class="fullscreen z-container">
            <div class="visor">
                <div class="sc-art-row">
                    <div class="sc-art"></div>
                    <div class="blackout"></div>
                </div>
            </div> 
            <div class="fullscreen bkgd-music-0" style="background-image: url(/static/img/music0.png); opacity: 0.3;"></div>
            <div class="fullscreen bkgd-music"></div>
            <div class="sc-widget-panel">
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682313129&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/957026233&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/956801530&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/956780281&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/956776174&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                <iframe class="sc-widget" width="100%" height="40vh" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1682309508&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

                //<iframe class="sc-widget" src="https://w.soundcloud.com/player/?url=https://soundcloud.com/nighttimecherryblossoms&amp;color=%23ff0000" bottom="0px" width="90%" height="500px" scrolling="yes" frameborder="no"></iframe>
            </div>
            // <div id="audio-player"></div>
            // <div id="play-icon"></div>
            // <div id="seek-slider"></div>
            // <div id="volume-slider"></div>
            // <div id="mute-icon"></div>
            // <div id="duration"></div>
            // <div id="current-time"></div>
            // <div id="volume-output"></div>
            <div id="template"/>
            <audio-player data-class = ".sc-widget"> </audio-player>
            // <script type="module" src="static/js/ext/lottie.min.js"></script>
            <script type="module" src="static/js/audioplayer.js"></script>
        </div>
    
    }  
}
