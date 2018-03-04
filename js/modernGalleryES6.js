const current = document.getElementById("current");
const imgs = document.querySelectorAll(".imgs img");
const opacity = 0.5;

function imgClick(e) {
    //reset opacity for images
    imgs.forEach(img => (img.style.opacity = 1));

    //change source of current pictures
    current.src = e.target.src;

    // change attribute alt
    const altName = e.target.getAttribute("alt");
    current.setAttribute("alt", altName);

    //change h2 value
    const title = e.target.getAttribute("title");
    current.nextElementSibling.firstElementChild.innerText = title;

    //chage description of picture
    const description = e.target.getAttribute("data-text");
    current.nextElementSibling.firstElementChild.nextElementSibling.innerText = description;

    //change the opacity
    e.target.style.opacity = opacity;

    //add fade in effect
    current.classList.add("fade");

    //remove class fade
    setTimeout(() => current.classList.remove("fade"), 400);
}

imgs[0].style.opacity = opacity;
imgs.forEach(img => img.addEventListener("click", imgClick));