use yew::prelude::*;
use yew_router::prelude::*;

// ===================================================================================
mod config;
pub use crate::config::info;

mod projects;
pub use crate::projects::*;
// ===================================================================================
// for {username}.github.io/{repo_name}
// replace 'yew-template-for-github.io' to your repo name

// #[derive(Routable, PartialEq, Debug, Clone)]
// enum RootRoute {
//     #[at("/")]
//     Home,
//     #[at("/:s")]
//     Route,
    
// }

#[derive(Routable, PartialEq, Debug, Clone)]
enum Route {
    #[at("/")]
    Home,

    #[at("/about")]
    About,

    #[at("/cv")]
    Cv,

    #[at("/projects/*mdpath")]
    Project { mdpath: String},

    #[at("/music")]
    Music,

    #[at("/art")]
    Art,

    #[at("/world")]
    World,

    #[at("/arch")]
    Arch,

    #[not_found]
    #[at("/404")]
    NotFound,
}

// fn root_route(routes: &RootRoute) -> Html {
//     match routes {
//         RootRoute::Home => projects::default::main(), //html! { <h2 class="yk huge">{ "main" }</h2> }, // "yozakura 夜桜 (cherry blossoms at night)" "kumorizora no kōyō 曇り空の紅葉" (cloudy sky autumn leaves)
//         RootRoute::Route => html! {
//             <Switch<R> render={Switch::R(switch)} />
//         },
//     }
// }

fn switch(route: Route) -> Html {
    match route {
        Route::Home => projects::cv(),//projects::default::main(),
        Route::About => html! { <p>{ "About" }</p> },
        // Route::NotFound => html! { <p>{ "Not Found" }</p> },
        Route::Project { mdpath } => projects::project(&mdpath),
        Route::Music => projects::default::music(),
        Route::Art => projects::art(),
        Route::World => projects::world(),
        Route::Arch => projects::arch(),
        Route::NotFound => projects::default::notfound(),
        Route::Cv => projects::cv(),
    }
}

// ===================================================================================
// for {username}.github.io

// #[derive(Clone, Routable, PartialEq)]
//  enum RootRoute {
//      #[at("/")]
//      Home,
//      #[at("/about")]
//      About,
//      #[not_found]
//      #[at("/404")]
//      NotFound,
//  }

//  fn root_route(routes: &Route) -> Html {
//      match routes {
//          RootRoute::Home => html! { <p class="text-4xl">{ "Yew Template" }</p> },
//          RootRoute::About => html! { <p>{ "About" }</p> },
//          RootRoute::NotFound => html! { <p>{ "Not Found" }</p> },
//      }
//  }

// ===================================================================================

/// main root
#[function_component(App)]
fn app() -> Html {
    // let proxy = config::info();
    html! {
        // ********************************************************
        // **    basename is not supported on yew 0.19.0 yet.    **
        // <BrowserRouter basename="/">
        //     <Switch<Route> render={Switch::render(switch)} />
        // </BrowserRouter>
        // ********************************************************
        <HashRouter>
            <Switch<Route> render={switch} />
        </HashRouter>
    }
}

/// entry point
fn main() {
    yew::Renderer::<App>::new().render();
}
