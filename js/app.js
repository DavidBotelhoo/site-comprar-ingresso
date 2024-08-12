function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (ingresso == 'pista') {
        comprarPista(qtd);
    } else if (ingresso == 'superior') {
        comprarSuperior(qtd);
    } else {
        comprarInferior(qtd);
    }

    if (isNaN(qtd) || qtd <= 0) {
        alert('Coloque uma quantidade válida');
        return;
    }
}

function comprarPista(qtd) {
    let areaPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > areaPista) {
        alert('Quantidade indisponivel para tipo pista');
    }  else {
        areaPista = areaPista - qtd;
        document.getElementById('qtd-pista').textContent = areaPista;
        alert('Compra Realizada');
    }
}

function comprarSuperior(qtd) {
    let cadeiraSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > cadeiraSuperior) {
        alert('Quantidade indisponivel para tipo Cadeira Superior');
    }  else {
        cadeiraSuperior = cadeiraSuperior - qtd;
        document.getElementById('qtd-superior').textContent = cadeiraSuperior;
        alert('Compra Realizada');
    }
}

function comprarInferior(qtd) {
    let cadeiraInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > cadeiraInferior) {
        alert('Quantidade indisponivel para tipo Cadeira Inferior');
    }  else {
        cadeiraInferior = cadeiraInferior - qtd;
        document.getElementById('qtd-inferior').textContent = cadeiraInferior;
        alert('Compra Realizada');
    }
}