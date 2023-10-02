<link rel="stylesheet" href="/static/css/phogroup.css">
<link rel="stylesheet" href="/static/css/layout-poster.css">
<link rel="stylesheet" href="/static/css/slideshow.css">
<link rel="stylesheet" href="/static/css/card-inner.css">

<div class="card" markdown="1">

# Na-22 Source 3D TOF Reconstruction

<div class="slideshow-container slides0" data-index="1">
    <img class="mySlides fade" src="/static/figures/reco/r/Slide1.JPG"></img>
    <img class="mySlides second fade" src="/static/figures/reco/r/Slide2.JPG"></img>
    <img class="mySlides second fade" src="/static/figures/reco/r/Slide3.JPG"></img>
    <img class="mySlides second fade" src="/static/figures/reco/r/Slide4.JPG"></img>
    <img class="mySlides second fade" src="/static/figures/reco/r/Slide5.JPG"></img>
    <img class="mySlides second fade" src="/static/figures/reco/r/Slide6.JPG"></img>
    <div class="clicker">
    <a class="prev" onclick="plusSlides(-1,this.parentElement.parentElement);">&#10094;</a>
    <a class="next" onclick="plusSlides(1,this.parentElement.parentElement);">&#10095;</a>
    </div>
</div>

# Plastic PET Reconstruction

A simple (preliminary) TOF-3D reconstruction in Blender of the plastic PET scanner. Please note that simulations were not validated prior to leaving the lab, so the results are not necessarily accurate.

<img src="/static/figures/plastic-pet/renderArt_art.png"></img>
<img src="/static/figures/plastic-pet/renderArt.png"></img>

An example with a brain phantom of reconstruction and LORs (lines of response) is shown below.
<img src="/static/figures/plastic-pet/renderI_OOC.png"></img>
<img src="/static/figures/plastic-pet/renderLOR_OOC.jpg"></img>


Estimated (not simulated like above) off-center accuracy (based on KNN regression) is shown below.
A reconstruction, then the lines of response (LORs) with midpoints, and finally the gamma interaction locations are shown.
<img src="/static/figures/plastic-pet/renderI.png"></img>
<img src="/static/figures/plastic-pet/renderI_centers.png"></img>
<img src="/static/figures/plastic-pet/renderI_points.png"></img>

Note the error is not uniform, and will cause ring-like artifacts in the reconstruction, due the LOR midpoint shifts.

An unfinished 3D volumetric raytracer package can be found [here](https://github.com/akhilsadam/raytracer-imaging/tree/master).
It uses quaternions and raytracing to generate ART (algebraic reconstruction technique) and OSEM (ordered subsets expectation maximization) reconstructions of PET data.

</div>