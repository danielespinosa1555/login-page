const container = document.querySelector('.container');
const btnRegistrarse = document.getElementById('btn-form-registro');
const btnIniciar = document.getElementById('btn-form-iniciar');

btnRegistrarse.addEventListener('click', () => {
    container.classList.add('toggle');
});

btnIniciar.addEventListener('click', () => {
    container.classList.remove('toggle');
});
