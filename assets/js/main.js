// ********************
// FOP MODAL
// ********************

let fopped = true;

const fop = document.querySelector("#modal");
window.addEventListener('load', () => {
    if(!fopped) {
        setTimeout(() => {
            fop.classList.add("is-fopped");
            fopped = true;
        }, 30000)
    }
});

const close = document.querySelector('#close');
close.addEventListener('click', () => {
    fop.remove();
})
