const checkbox = document.getElementById('agreement-checkbox');
const button = document.getElementById('btn-register');

checkbox.checked = false;

checkbox.addEventListener('change', () => {

    if (checkbox.checked) {

        button.disabled = false;

    }
    else {

        button.disabled = true;

    }

})

var Usuario = {

    nome: "nome"

}

button.addEventListener('click', (e) => {

    e.preventDefault();

})

