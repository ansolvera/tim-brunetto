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