const elLeftBlock = document.querySelector( '.leftBlock' );
const elRightBlock = document.querySelector( '.rightBlock' );
const elButtonArrows = document.querySelectorAll( '.arrow' );

function remove(el) {
    const elParentToArrow = el.parentNode;

    if ( el.classList.contains('toRight') ) {
        elRightBlock.appendChild(elParentToArrow);
        el.classList.add('toLeft');
        el.classList.remove('toRight');
    } else {
        elLeftBlock.appendChild(elParentToArrow);
        el.classList.add('toRight');
        el.classList.remove('toLeft');
    }
}

elButtonArrows[0].addEventListener( 'click', (ev) => {
    remove(elButtonArrows[0]);
});
elButtonArrows[1].addEventListener( 'click', (ev) => {
    remove(elButtonArrows[1])
});

