# Generates projects.rs
# no underscore allowed in folder/file names
#
#

import os, datetime
cwd = os.getcwd()
pwd = os.path.join(cwd, 'src/projects')
swd = os.path.join(cwd, 'src/projects')
header = """
// This file is generated by tree.py, do not edit manually
use yew::{html, AttrValue, Html};
use comrak::{markdown_to_html, ComrakOptions};
// use include_dir::{include_dir, Dir};
// use gloo_console::log;
// use wasm_bindgen::JsValue;

pub mod default;
pub use crate::default::*;

pub fn md_gen(data:&str) -> Html
{
    let mut options = ComrakOptions::default();
    
    options.render.unsafe_ = true;
    options.render.github_pre_lang = true;
    options.extension.strikethrough = true;
    options.extension.tagfilter = true;
    options.extension.table = true;
    options.extension.autolink = true;
    options.extension.tasklist = true;
    options.extension.superscript = true;
    options.extension.footnotes = true;
    options.extension.description_lists = true;
    
    let htmlstr : String = markdown_to_html(&data, &options);
    let parsed = Html::from_html_unchecked(AttrValue::from(htmlstr));
    html! {
        <div class="wrapper" markdown="1">
            {parsed}
        </div>
    }
}



pub fn cv() -> Html
{
    let data = include_str!("../content/cv/cv.md");
    // let file_loc = "/static/md/content/cv/cv.md";
    // let data = default::get_string_from_file(&file_loc).unwrap();
    md_gen(&data)
}


pub fn art() -> Html
{
    let data = include_str!("../content/art/art.md");
    md_gen(&data)
}

pub fn world() -> Html
{
    let data = include_str!("../content/world/world.md");
    md_gen(&data)
}

pub fn arch() -> Html
{
    let data = include_str!("../content/arch/arch.md");
    md_gen(&data)
}

"""
allfiles = []
def fast_scandir(directory):
    subfolders= [f.path for f in os.scandir(directory) if f.is_dir()]
    for dirname in list(subfolders):
        files = [os.path.relpath(os.path.join(dirname, f),pwd).replace('.md','') for f in os.listdir(dirname) if os.path.isfile(os.path.join(dirname, f)) and f.endswith('.md')]
        allfiles.extend(files)
        subfolders.extend(fast_scandir(dirname))
    return subfolders

fast_scandir(pwd)

items = allfiles
names = [i.replace(r'/', '_').replace('-','_') for i in items]
print(names)

template = """
pub fn fnname() -> Html
{
    let data = include_str!("path.md");
    // let file_loc = "/static/md/projects/path.md";
    // let data = default::get_string_from_file(&file_loc).unwrap();
    md_gen(&data)
}
"""

templates = [template.replace('path', i).replace('fnname',a) for a,i in zip(names,items)]

routelambda = lambda a, b: f'"{a}" => {b}(),'
routes = '\n\t'.join([routelambda(i, a) for a,i in zip(names,items)])


switch = """
pub fn project(name: &str) -> Html {
    match name {
        """+routes+"""
        _ => default::notfound(),
    }
}
"""

main = \
header + \
'\n'.join(templates) + \
switch

with open(os.path.join(swd, 'mod.rs'), 'w') as f:
    f.write(main)