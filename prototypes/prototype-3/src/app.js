import Particle from './Particle';


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.querySelector('#jumbotron');
    const ctx = canvas.getContext('2d');

    const p = new Particle(ctx, canvas.clientWidth, canvas.clientHeight);
    p.draw();
});
