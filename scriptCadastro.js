document.addEventListener("DOMContentLoaded", function() {
    const formCadastroVaga = document.getElementById("formCadastroVaga");
    formCadastroVaga.addEventListener("submit", function(e) {
        e.preventDefault();

        const inputNumeroVaga = document.getElementById("inputNumeroVaga");
        const inputBlocoApartamento = document.getElementById("inputBlocoApartamento");
        const inputNumeroApartamento = document.getElementById("inputNumeroApartamento");
        const inputProprietarioVeiculo = document.getElementById("inputProprietarioVeiculo");
        const inputPlacaVeiculo = document.getElementById("inputPlacaVeiculo");
        const inputModeloVeiculo = document.getElementById("inputModeloVeiculo");
        const inputCorVeiculo = document.getElementById("inputCorVeiculo");
        const mensagem = `Vaga: ${inputNumeroVaga.value}\n`
        + `Apartamento\n`
        + `Bloco: ${inputBlocoApartamento.value}\n`
        + `Número: ${inputNumeroApartamento.value}\n`
        + `Veículo\n`
        + `Proprietário: ${inputProprietarioVeiculo.value}\n`
        + `Placa: ${inputPlacaVeiculo.value}\n`
        + `Modelo: ${inputModeloVeiculo.value}\n`
        + `Cor: ${inputCorVeiculo.value}\n`;
        console.log(mensagem);
        alert("Cadastro realizado com sucesso!")
    });
});
