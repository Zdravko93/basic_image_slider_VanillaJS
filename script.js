window.onload = () => {
    const carouselSlide = document.querySelector(".carousel-slide");
    const carouselImages = document.querySelectorAll(".carousel-slide img");
    const nextSlideBtn = document.querySelector(".forwards");
    const previousSlideBtn = document.querySelector(".backwards");

    const slideMove = carouselImages[0].clientWidth;
    let counter = 0;

    carouselSlide.style.transform = `translateX(-${slideMove + (0.3 * 16)}px)`; // carousel slider starts with the first image, not the clone one, that's why slider needs to move to the left

    function applyDynamicStyles() {
        carouselSlide.style.transition = `transform 500ms ease-in-out`;
        //opacity animation goes here...   
    };

    function navigateToNextSlide() {
        applyDynamicStyles();
        counter++;
        if (counter >= carouselImages.length) {
            counter = 0;
            carouselSlide.style.transition = "none";
        }
        carouselSlide.style.transform = `translateX(-${counter * (slideMove + (0.3 * 16))}px)`; // 0.3 * 16px because of the gap(flex) 0.3em on display:flex property on 'carousel-slide' element
    }

    function navigateToPreviousSlide() {
        applyDynamicStyles();
        counter--;
        if (counter < 0) {
            counter = carouselImages.length - 1;
            carouselSlide.style.transition = "none";
        }
        carouselSlide.style.transform = `translateX(-${counter * (slideMove + (0.3 * 16))}px)`;
    }

    nextSlideBtn.addEventListener("click", navigateToNextSlide);
    previousSlideBtn.addEventListener("click", navigateToPreviousSlide);
}

