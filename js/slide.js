// To choose the content you wanna see (About me, Stats...)

function slideShows(n) {
    let slides = document.getElementsByClassName('content');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[n -1].style.display = "grid";

    return slides
};
