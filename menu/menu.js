
function animateForLargeScreen() {
    gsap.to('.overlay-image', {x: -270, duration: 2, delay: 1})
    gsap.to('.right', {x: 270, duration: 2, delay: 1})  
}

function animateForMobileScreen() {
    gsap.to('.overlay-image', {y: 650, duration: 2, delay: 1})
}

const mediaQuery = window.matchMedia("(min-width: 801px)");

function handleScreenSizeChange() {
    if (mediaQuery.matches) {
        animateForLargeScreen();
    }
    else {
        animateForMobileScreen();
    }
}

mediaQuery.addEventListener("change", handleScreenSizeChange);
handleScreenSizeChange();