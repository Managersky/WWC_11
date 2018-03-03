const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.6;

function imgClick(e) {
    //reset opacity for images
    imgs.forEach(img => (img.style.opacity = 1));

    //change source of current pictures
    current.src = e.target.src;

    //change the opacity
    e.target.style.opacity = opacity;

    //add fade in effect
    current.classList.add("fade");

    //remove class fade
    setTimeout(() => current.classList.remove("fade"),1000);
}

imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener("click", imgClick));