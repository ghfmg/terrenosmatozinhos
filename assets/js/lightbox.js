const figures = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightbox-image");

const lightboxCaption = document.getElementById("lightbox-caption");

const closeButton = document.querySelector(".lightbox-close");

figures.forEach(figure => {

    const image = figure.querySelector("img");

    if (!image) return;

    image.addEventListener("click", () => {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        const figcaption = figure.querySelector("figcaption");

        lightboxCaption.textContent = figcaption
            ? figcaption.textContent
            : "";

        lightbox.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

closeButton.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", e => {

    if (e.target === lightbox){

        closeLightbox();

    }

});

document.addEventListener("keydown", e => {

    if (e.key === "Escape"){

        closeLightbox();

    }

});

function closeLightbox(){

    lightbox.classList.remove("active");

    lightboxImage.src = "";

    lightboxCaption.textContent = "";

    document.body.style.overflow = "";

}