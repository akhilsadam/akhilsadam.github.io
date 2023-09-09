use yew::prelude::*;
use yew_router::prelude::*;

// ===================================================================================
mod config;
pub use crate::config::info;

mod default;
pub use crate::default::*;

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

    #[at("/music")]
    Music,

    #[not_found]
    #[at("/404")]
    NotFound,
}

// fn root_route(routes: &RootRoute) -> Html {
//     match routes {
//         RootRoute::Home => default::main(), //html! { <h2 class="yk huge">{ "main" }</h2> }, // "yozakura 夜桜 (cherry blossoms at night)" "kumorizora no kōyō 曇り空の紅葉" (cloudy sky autumn leaves)
//         RootRoute::Route => html! {
//             <Switch<R> render={Switch::R(switch)} />
//         },
//     }
// }

fn switch(route: Route) -> Html {
    match route {
        Route::Home => default::main(),
        Route::About => html! { <p>{ "About" }</p> },
        // Route::NotFound => html! { <p>{ "Not Found" }</p> },
        Route::Music => default::music(),
        Route::NotFound => default::notfound(),
        Route::Cv => default::cv(),
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
        <BrowserRouter>
            <Switch<Route> render={switch} />
        </BrowserRouter>
    }
}

/// entry point
fn main() {
    yew::Renderer::<App>::new().render();
}
