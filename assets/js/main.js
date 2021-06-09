// ********************
// FOP MODAL
// ********************

let fopped = false;

const fop = document.querySelector("#overlay");
const body = document.querySelector("body");
window.addEventListener('load', () => {
    if(!fopped) {
        setTimeout(() => {
            fop.classList.add("is-fopped");
            body.classList.add("no-scroll");
            fopped = true;
        }, 30000)
    }
});
