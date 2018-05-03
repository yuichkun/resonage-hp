
window.addEventListener('load', () => {
    setTimeout(() => {
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        console.log(left);
        left.classList.add('left-clip');
        left.classList.add('clipper');
        right.classList.add('right-clip');
        right.classList.add('clipper');
    }, 4000);
});