'use strict';

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

document.getElementById('cep').addEventListener('focusout', pesquisarCep);
