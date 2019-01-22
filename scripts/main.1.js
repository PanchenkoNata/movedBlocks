const elButtonArrows = document.querySelectorAll( '.arrow' );
// console.log(elButtonArrows);
// let a = window.getComputedStyle(elButtonArrows[0]).left;
// console.log(a);

params = {
    shift1 : 420,
    shift2 : 300,
    shift3 : 120
}

function moveToRight(el) {
    console.log('start move to right');
    let elLeft = parseInt(window.getComputedStyle(el).left);
    const elPrevSib = el.previousElementSibling;
    
    if (!elPrevSib.classList.contains('moved_item')) {
        el.style.left = (elLeft + params.shift1) + 'px';
        return;
    }
    let prevSibLeft = parseInt(window.getComputedStyle(elPrevSib).left);
    if ( elLeft < prevSibLeft ) {
        el.style.left = (elLeft + params.shift1) + 'px';
    } else {
        el.style.left = (elLeft + params.shift2) + 'px';
        elPrevSib.style.left = (prevSibLeft + params.shift3) + 'px'; 
    }
}
function moveToLeft(el) {


    console.log('start move to left');
    let elLeft = parseInt(window.getComputedStyle(el).left);
    const elNextSib = el.nextElementSibling;
    console.log(elNextSib);

    if (elNextSib==null || !elNextSib.classList.contains('moved_item')) {
        el.style.left = (elLeft - params.shift1) + 'px';
        return;
    }
    let nextSibLeft = parseInt(window.getComputedStyle(elNextSib).left);
    if ( elLeft > nextSibLeft ) {
        el.style.left = (elLeft - params.shift1) + 'px';
    } else {
        el.style.left = (elLeft - params.shift2) + 'px';
        elNextSib.style.left = (nextSibLeft - params.shift3) + 'px'; 
    }
}

function move(el) {
    const elParentToArrow = el.parentNode;

    if ( el.classList.contains('toRight') ) {
        // animMoveRight(elParentToArrow);
        moveToRight(elParentToArrow);
        el.classList.add('toLeft');
        el.classList.remove('toRight');
    } else {
        // animMoveLeft(elParentToArrow);
        moveToLeft(elParentToArrow);
        el.classList.add('toRight');
        el.classList.remove('toLeft');
    }
}

elButtonArrows[0].addEventListener( 'click', (ev) => {
    move(elButtonArrows[0]);
});
elButtonArrows[1].addEventListener( 'click', (ev) => {
    move(elButtonArrows[1])
});