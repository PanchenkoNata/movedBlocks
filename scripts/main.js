const elLeftBlock = document.querySelector( '.leftBlock' );
const elRightBlock = document.querySelector( '.rightBlock' );
const elButtonArrows = document.querySelectorAll( '.arrow' );

elButtonArrows[0].addEventListener( 'click', (ev) => {
    const elParentToArrow = elButtonArrows[0].parentNode;

    if ( elButtonArrows[0].classList.contains('toRight') ) {
        elRightBlock.appendChild(elParentToArrow);
        elButtonArrows[0].classList.add('toLeft');
        elButtonArrows[0].classList.remove('toRight');
    } else {
        elLeftBlock.appendChild(elParentToArrow);
        elButtonArrows[0].classList.add('toRight');
        elButtonArrows[0].classList.remove('toLeft');
    }
});

elButtonArrows[1].addEventListener( 'click', (ev) => {
    const elParentToArrow = elButtonArrows[1].parentNode;

    if ( elButtonArrows[1].classList.contains('toRight') ) {
        elRightBlock.appendChild(elParentToArrow);
        elButtonArrows[1].classList.add('toLeft');
        elButtonArrows[1].classList.remove('toRight');
    } else {
        elLeftBlock.appendChild(elParentToArrow);
        elButtonArrows[1].classList.add('toRight');
        elButtonArrows[1].classList.remove('toLeft');
    }
});
