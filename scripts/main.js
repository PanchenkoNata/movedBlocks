const elButtonArrows = document.querySelectorAll( '.arrow' );

function moveToRight(el) {
    const movedItems = document.querySelectorAll('.moved_item');
    if ( el.classList.contains('pos_left2')) {
        el.classList.remove('pos_left2');
        el.classList.add('pos_right1');
        return;
    }

    let elSubling = movedItems[0];
    if (elSubling.classList.contains('pos_left1')) {
        elSubling = movedItems[1];
    }
    if ( elSubling.classList.contains('pos_right1')) {
        el.classList.remove('pos_left1');
        el.classList.add('pos_right2');
    } else {
        el.classList.remove('pos_left1');
        el.classList.add('pos_right1');
        elSubling.classList.remove('pos_left2');
        elSubling.classList.add('pos_left1');
    }
}
function moveToLeft(el) {
    const movedItems = document.querySelectorAll('.moved_item');
    if ( el.classList.contains('pos_right2')) {
        el.classList.remove('pos_right2');
        el.classList.add('pos_left1');
        return;
    }
    let elSubling = movedItems[0];
    if (elSubling.classList.contains('pos_right1')) {
        elSubling = movedItems[1];
    }
    if ( elSubling.classList.contains('pos_left1')) {
        el.classList.remove('pos_right1');
        el.classList.add('pos_left2');
    } else {
        el.classList.remove('pos_right1');
        el.classList.add('pos_left1');
        elSubling.classList.remove('pos_right2');
        elSubling.classList.add('pos_right1');
    }
}

function move(el) {
    const elParentToArrow = el.parentNode;

    if ( el.classList.contains('toRight') ) {
        moveToRight(elParentToArrow);
        el.classList.add('toLeft');
        el.classList.remove('toRight');
    } else {
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