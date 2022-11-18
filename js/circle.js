const exploreSwiper = new Swiper(".exploreSwiper", {
    direction: "vertical",
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    centeredSlides: true,
    // initialSlide: 2,
});

const sun = document.querySelector(".sun");
const imagesOnItems = Array.from(
    document.querySelectorAll("[data-explore-item] img")
);
imagesOnItems.forEach((el) => (el.style.transition = "transform 200ms linear"));

function rotateImages(angle) {
    imagesOnItems.forEach(
        (el) => (el.style.transform = `rotate(-${angle}deg)`)
    );
}

function handleRotate(deg) {
    sun.style.transform = `rotate(${deg}deg)`;
    rotateImages(deg);
}

exploreSwiper.on("transitionStart", (e) => {
    const activeSlide = e.activeIndex;

    exploreItems.forEach((item) => {
        const itemId = Number(item.getAttribute("data-explore-item"));
        item.classList.remove("active");
        if (itemId === activeSlide) {
            item.classList.add("active");
        }
    });

    const angles = [0, 38, 73, 108, 144, 180, 216, 251, 286, 324];
    handleRotate(angles[activeSlide]);
});

const exploreItems = Array.from(
    document.querySelectorAll("[data-explore-item]")
);

exploreItems.forEach((item) => {
    const id = Number(item.getAttribute("data-explore-item"));

    item.addEventListener("click", (e) => {
        exploreItems.forEach((el) => el.classList.remove("active"));
        item.classList.add("active");
        exploreSwiper.slideTo(id);
    });
});
