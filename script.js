function enviar(){
    var n = String(document.getElementById('nome').value)
    window.alert(`Dados enviado com sucesso, ${n}`)
}

function limpar(){
    document.getElementById('nome').value=``
    document.getElementById('sobrenome').value=``
    document.getElementById('nasc').value=``
    document.getElementById('rg').value=``
    document.getElementById('cpf').value=``
    document.getElementById('rua').value=``
    document.getElementById('n1').value=``
    document.getElementById('bairro').value=``
    document.getElementById('estado').value=``
    document.getElementById('cidade').value=``
    document.getElementById('cep').value=``
    document.getElementById('email').value=``
    document.getElementById('imagem').value=``
    document.getElementById('login').value=``
    document.getElementById('senha').value=``
    document.getElementById('senha2').value=``
}