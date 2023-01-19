// Quando  o  form for enviado chama da função formProcess
$(document).on('submit', '#contactForm', formProcess);

// Função que processa o envio do form
function formProcess() {

    // Ocultar o furmulário
    $('#contactForm').hide();

    // Extrai o primeiro nome do usuário
    let firstName = $('#name').val().split(' ')[0];

    let feedback = `
    
<h4>Olá ${firstName}!</h4>
<p>Seu contato foi enviado com sucesso.</p>
<p><em>Obrigado...</em></p>    
    
    `;

    // Envia mensagem para a div feedback
    $('#feedback').html(feedback);

    // Mostra a div oculta
    $('#feedback').show();

    // Mostra valores preenchidos no console do JavaScript
    let output = `
    
    Nome: ${$('#name').val()}
    E-mail: ${$('#email').val()}
    Assunto: ${$('#subject').val()}
    Mensagem: ${$('#message').val()}
    
    `;
    console.log(output);

    // Não envia o formulário
    return false;

}