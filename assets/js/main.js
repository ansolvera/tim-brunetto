// ********************
// FOP MODAL
// ********************

let shownModal = false;
const modal = document.querySelector('#modal');

window.addEventListener('load', () => {
    if(!shownModal) {
        setTimeout(() => {
            modal.classList.add('is-revealed');
            //shownModal = true;
        }, 1000)
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

document.querySelector('#sib-form').addEventListener('submit', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://c23ef8a2.sibforms.com/serve/MUIEAH0VpauvuLzv9DvebiNNmcFnbMuHYabHk3EC0Y2Le5J5Lr160C3MHWvSgZUiNukCOjbxUOg5AkuJ1WUv2KhYdb2A3N9ycAax5slE74GgbQn_iYcGVWnSkhvNQNaZyz5UFZ0Lpow82tPLTIl3EiTVKJcehGOjA-vKMEomNFY8FKj-SNXir83YZTNJ5QAEJYk5JD2a9eJGO_w4', true)

    xhr.onload = function() {
        let success = document.querySelector('#success-message');
        let error = document.querySelector('#error-message');

        if(xhr.status == 200) {
            success.classList.add('is-shown')
        } else {
            error.classList.add('is-shown')
        } return false;
    }

    xhr.send();

})

modal.addEventListener('submit', () => {
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://c23ef8a2.sibforms.com/serve/MUIEAH0VpauvuLzv9DvebiNNmcFnbMuHYabHk3EC0Y2Le5J5Lr160C3MHWvSgZUiNukCOjbxUOg5AkuJ1WUv2KhYdb2A3N9ycAax5slE74GgbQn_iYcGVWnSkhvNQNaZyz5UFZ0Lpow82tPLTIl3EiTVKJcehGOjA-vKMEomNFY8FKj-SNXir83YZTNJ5QAEJYk5JD2a9eJGO_w4', true)

    xhr.onload = function() {
        let modalSuccess = document.querySelector('#success-message--modal');
        let modalError = document.querySelector('#error-message--modal');

        if(xhr.status == 200) {
            modalSuccess.classList.add('is-shown')
            setTimeout(() => {
                modal.remove();
            }, 5000);
        } else {
            modalError.classList.add('is-shown')
        } return false;
    }

    xhr.send();

})