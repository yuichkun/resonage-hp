window.addEventListener('load', () => {
    setTimeout(() => {
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        console.log(left);
        left.classList.add('clipper');
        right.classList.add('clipper');
        setTimeout(() => {
            left.classList.add('left-clip');
            right.classList.add('right-clip');
        }, 50);
    }, 4000);
});