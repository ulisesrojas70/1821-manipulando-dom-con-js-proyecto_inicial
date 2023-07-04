const btn = document.querySelector('[data-form-btn]');

console.log(btn);

btn.addEventListener('click', function(evento) {
    console.log(evento);
    const input = document.querySelector('[data-form-input]');
    console.log(input.value);
})