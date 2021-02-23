const fila = document.querySelector('.cont-carousel');
const peliculas = document.querySelectorAll('.seguros');

const flechaizquierda = document.getElementById('flecha-izquierda');
const flechaderecha = document.getElementById('flecha-derecha');

flechaderecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
});

flechaizquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth;
});



seguro.forEach((seguros) => {
    seguros.addEventListener('mouseenter',(e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            seguro.forEach(seguros => seguros.classList.remove('hover'));
            elemento.classList.add('hover');
        }, 300);
    });
    
});