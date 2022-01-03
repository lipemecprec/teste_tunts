// O campo “nome” aceita apenas 50 caracteres no máximo, não podendo ser números ou caracteres especiais. 
function validar_nome() {
  var nome = document.getElementById("nome");

  if (!(/^(?=.*[\w])[\w]{50,}$/.test(nome))) {
	  alert("Nome inválido");
	  nome.focus();
	  return;
	}
	else
	{
		return true;
	}
}

// O campo “e-mail” só permite e-mail’s válidos (formato: nome@email.algo). 
function validar_email() {
	var email = document.getElementById("email");
	
	if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(nome))) {
		alert("Este e-mail é inválido");
		email.focus();
		return;
	}
	else
	{
		return true;
	}
}

// O campo “senha” permite senha com no mínimo 4 caracteres e contendo obrigatoriamente pelo menos uma letra, um caractere especial e um número.
function validar_senha() {
	var senha = document.getElementById("senha");
	
	if (!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{4,}$/.test(nome))) {
		alert("Lembre-se que deverá ser informado no mínimo 4 caracteres (Ao menos uma letra, um caractere especial e um número).");
		senha.focus();
		return;
	}
	else
	{
		return true;
	}
}

// O campo “repetir senha” deve ser igual ao escrito no campo “senha”
function validar_repetir_senha() {
	var senha = document.getElementById("senha");
	var repetir_senha = document.getElementById("repetir senha");
	
	if (senha.value == repetir_senha.value) {
		alert("Senhas não coincidem.");
		nome.focus();
		return;
	}
	else
	{
		return true;
	}
}

function validar_formulário() {
	if (validar_email() && validar_senha() && validar_repetir_senha()) {
		return true;
	}
}

// O botão "cadastrar" será habilitado somente nos casos de nenhuma pendência encontrada nos campos de e-mail e senha. Caso não tenha pendências, o cadastro do e-mail será realizado com sucesso e armazenado com sucesso em um banco de dados local.
function validar_cadastrar() {
	var cadastrar_button = document.getElementById("cadatrar");
  
	cadastrar_button.disable = true;
	if (validar_formulário()) {
		cadastrar_button.disable = false;
		// TODO call database input
		return;
	}
}

// Caso o “e-mail” já tenha sido cadastrado, o cadastro não pode ser finalizado.
function validar_email_unico() {
	// TODO check database input
}