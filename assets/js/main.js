// ********************
// FOP MODAL
// ********************

let shownModal = false;
const modal = document.querySelector('#modal');

window.addEventListener('load', () => {
    if(!shownModal) {
        setTimeout(() => {
            modal.classList.add('is-revealed');
            shownModal = true;
        }, 30000)
    }
});

const close = document.querySelector('#close');

close.addEventListener('click', () => {
    modal.classList.remove('is-revealed');
    modal.remove();
})

// ********************
// SCROLL NAVIGATION
// ********************

window.addEventListener('scroll', () => {
    let nav = document.querySelector('.navigation');

    if (window.pageYOffset > 0) {
        nav.classList.add('black');
    } else {
        nav.classList.remove('black');
    }
});