'use strict';
/*
const limparForm = () => {

    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";

}



const validarCep = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async () => {

    limparForm();

    const cep = document.getElementById('cep').value.replace('.', "").replace('-', "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    if (validarCep(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado!';
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto!';
    }

}
*/

const limparForm = () => {

    document.getElementById('endereco').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";

}

const preencherFormulario = (endereco) => {

    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}

const validarCep = (cep) => cep.length == 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async () => {

    const cep = document.getElementById('cep');
    const formatedCep = cep.value.replace('.', "").replace('-', "");
    const url = `https://viacep.com.br/ws/${formatedCep}/json/`;

    if (validarCep(formatedCep)) {

        const data = await fetch(url).then(res => res.json());

        console.log(data);

        if (data.erro) {
            modal.style.cssText = "display: flex";
            modalMessage.textContent = "Cep não encontrado."
        } else {
            preencherFormulario(data);
        }
    } else {
        modal.style.cssText = "display: flex";
        modalMessage.textContent = "Cep inválido."
    }


}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
const close = document.querySelector('.close');
const modal = document.querySelector('.modal-background');
const modalMessage = document.querySelector('.message');

close.addEventListener('click', () => {
    modal.style.cssText = "display: none"
})