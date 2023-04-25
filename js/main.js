$(document).ready(function () {
});

$('#telefone').mask('(00) 00000-0000')

$('#texto').validate({
    rules: {
        nome: {
            required: true,
            nome: true
        },
        telefone: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        messages: {
            nome: 'Por favor , insira o seu nome completo'
        }
    }
});
    $('#limpar').click(function(e){
        $('#telefone').empty();
    })

    $('#botao').click(function(e){
        e.preventDefault();
    });
