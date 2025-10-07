// Permet d’agrandir les images quand on clique dessus
const images = document.querySelectorAll('.gallery img');

images.forEach(img => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('fullscreen');

        const image = document.createElement('img');
        image.src = img.src;

        overlay.appendChild(image);
        document.body.appendChild(overlay);

        // Fermer l’image en cliquant dessus
        overlay.addEventListener('click', () => {
            overlay.remove();
        });
    });
});

// Effet lightbox (agrandir les images quand on clique dessus)
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.createElement("div");
    const lightboxImg = document.createElement("img");

    lightbox.classList.add("lightbox");
    lightbox.appendChild(lightboxImg);
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.add("active");
        });
    });

    // Fermer l’image quand on clique n’importe où
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});