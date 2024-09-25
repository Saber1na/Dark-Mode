const botao = document.getElementById('botao');
const body = document.body;

botao.addEventListener('click', () => {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')){
        botao.textContent = 'Alterar para Light Mode';
    } else {
        botao.textContent = 'Alterar para Dark Mode';
    }
});