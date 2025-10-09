const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

function addFastTransition(element, seconds) {
    if (!element) return;
    element.style.transition = seconds;
}

function handleMouseOutFast(e) {
    addFastTransition(e.currentTarget, '0.5s');
}

function handleMouseOutSlow(e) {
    addFastTransition(e.currentTarget, '2s');
}

function handleMouseOutMedium(e) {
    addFastTransition(e.currentTarget, '1s');
}

if (hamburger) {
    hamburger.addEventListener('click', function() {
        this.classList.toggle('is-active');
        if (menu) {
            menu.classList.toggle('is-active');
        }
    });
}

// Delegate mouseout handlers for elements that used inline onmouseout
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[onmouseout="transi(this)"]').forEach(el => {
        el.removeAttribute('onmouseout');
        el.addEventListener('mouseout', handleMouseOutFast);
    });
    document.querySelectorAll('[onmouseout="transi2(this)"]').forEach(el => {
        el.removeAttribute('onmouseout');
        el.addEventListener('mouseout', handleMouseOutSlow);
    });
    document.querySelectorAll('[onmouseout="transi1(this)"]').forEach(el => {
        el.removeAttribute('onmouseout');
        el.addEventListener('mouseout', handleMouseOutMedium);
    });
});
