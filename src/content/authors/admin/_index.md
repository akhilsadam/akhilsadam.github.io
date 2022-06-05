---
# Display name
name: Akhil Sadam

# Username (this should match the folder name)
authors:
- admin

# Is this the primary user of the site?
superuser: true

# Role/position
role: Undergraduate Student

# Organizations/Affiliations
organizations:
- name: The University of Texas at Austin
  url: "https://utexas.edu"
#- name: Sadam Homeschool
#  url: "https://sites.google.com/view/sadamhomeschool/home"
#- name: Austin Community College
#  url: "https://www.austincc.edu/"

# Short bio (displayed in user profile at end of posts)
bio: My research interests include computational physics and math. I also create simulations and games with Unity (https://unity.com/) and cinematic music with FL Studio (https://www.image-line.com/flstudio/).

interests:
- Computational Physics & Math
- Particle Physics, <a class="a2" href="https://en.wikipedia.org/wiki/Positron_emission_tomography">PET</a>
- Magnetic Materials
- <a class="a2" href="https://en.wikipedia.org/wiki/Natural_language_processing">NLP</a>, <a class="a2" href="https://en.wikipedia.org/wiki/Procedural_generation">Procedural Generation</a>
- 2D/3D Art and Animation
- Game Development
- Music, Film, & Piano Scoring

education:
  courses:
  - course: BSc in Computational Engineering
    institution: The University of Texas at Austin
    year: 2024
  - course: HS
    institution: Sadam Homeschool
    year: 2020

# Social/Academic Networking
# For available icons, see: https://sourcethemes.com/academic/docs/page-builder/#icons
#   For an email link, use "fas" icon pack, "envelope" icon, and a link in the
#   form "mailto:your-email@example.com" or "#contact" for contact widget.
social:
 - icon: envelope
   icon_pack: fas
   link: '#contact'  # For a direct email link, use "mailto:test@example.org".
 - icon: github
   icon_pack: fab
   link: https://github.com/akhilsadam
 - icon: google-scholar
   icon_pack: ai
   link: https://scholar.google.com/citations?hl=en&user=6G9FVRgAAAAJ
 #- icon: arxiv
 #  icon_pack: ai
 #  link: 
 #- icon: inspire
 #  icon_pack: ai
 #  link: 

# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines above.
#- icon: cv
#  icon_pack: ai
#  link: cv/cv/resume.pdf

# Enter email to display Gravatar (if Gravatar enabled in Config)
email: ""

# Organizational groups that you belong to (for People widget)
#   Set this to `[]` or comment out if you are not using People widget.
#user_groups:
#- Researchers
#- Visitors
---
<link href="../../css/sp.css" rel="stylesheet" type="text/css">
<input type="checkbox" id="btnControl">
<label class="main-l" for="btnControl">
<div class="main-a">
<br>
I'm an undergraduate student interested in computational physics.<br><br>
<ul>
<li>At the UTKL Research Group, I develop a novel plastic barrel Positron Emission Tomography system.</li>  
<li>At the Phonon Momentum Group, I investigate the angular momentum of lattice phonons in ferrite samples.</li>
</ul>I also explore simple computer science algorithms, produce physics simulations, art, and music.</div>
<form class='secret'>
<br><br><br><br>
    <input type="number" id="pswd"></input>
    <input type="button" value="submit" onclick="checkPswd();" />
<br><br><br>
</form>
<script type="text/javascript">
function checkPswd() {
        var confirmPassword = "573";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             document.querySelector(".secret").style['display']='none';
	     document.querySelector(".main-music").style['display']='block';
	     document.querySelector(".mMain").style['display']='block';
	     playAA();
        }
        else{
            alert("↑↑↓↓←→←→BA");
        }
}
function toggle(x) {
  if (document.querySelector(".main-a").style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function rtoggle(x) {
  if (document.querySelector(".main-a").style.display === "none") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.querySelector(".avatar").addEventListener("click", function() {
	document.querySelector(".main-music").style['display']='none';
	document.querySelector(".mMain").style['display']='none';
	 rtoggle(document.querySelector(".secret"));
	 toggle(document.querySelector(".main-a"));
});
</script>
<div class="main-music">
<br>
<div class="main-music-light">
Why are we allowed to dream, even though we're so insignificant?<br>
Why are we allowed to hold hope in our lives, even though on day they'll end?<br>
Why is it that everything we were given just slips through our fingers?<br>
And isn't it unsightly, that we cling to them all the same?<br>
<div class="dropdown-b">
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <iframe id="soundcloud_widget" class="music-l" width="20px" height="19px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/865970269&color=%232300ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div class="dropdown-b-content">
Or is it actually beautiful? <a href="https://youtu.be/J97ORP768HI">Please, answer me!</a>
<hr>
</div>
</div>
</div>
<div class="main-music-dark">
I hate talking in a roundabout way.<br>
If you must speak, "Answer it within two words."<br>
Red butterfly, even a letter can not be served.<br>
Spreading a fragile folding fan.<br>
<div class="dropdown-b">
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <iframe id="soundcloud_widget" class="music-d" width="20px" height="19px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/662415881&color=%232300ff&auto_play=false&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&visual=false"></iframe><div class="dropdown-b-content">
<a href="https://youtu.be/0YF8vecQWYs">That is more attractive, isn't it?</a>
</div>
</div>
</div>
</label>
</input>
</div>