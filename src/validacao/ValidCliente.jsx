

export const validarCliente = (state) => {
    let { nome, cpf, endereco, telefone, bairro, numero, cidade, estado, toReturn, formValidation, } = state;

    if(nome.trim().length > 100){
        formValidation.nome.push("Limite maximo de 100 caracteres!");
        formValidation.validNome = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.nome.push("preencha o campo");
        formValidation.validNome = true;
        toReturn = true;
    }

    if(nome.trim().length > 100){
        formValidation.endereco.push("Limite maximo de 100 caracteres!");
        formValidation.validEndereco = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.endereco.push("preencha o campo");
        formValidation.validEndereco = true;
        toReturn = true;
    }

    if(nome.trim().length > 20){
        formValidation.cpf.push("Limite maximo de 100 caracteres!");
        formValidation.validCpf = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.cpf.push("preencha o campo");
        formValidation.validCpf = true;
        toReturn = true;
    }

    if(nome.trim().length > 20){
        formValidation.telefone.push("Limite maximo de 100 caracteres!");
        formValidation.validTelefone = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.telefone.push("preencha o campo");
        formValidation.validTelefone = true;
        toReturn = true;
    }

    if(nome.trim().length > 50){
        formValidation.bairro.push("Limite maximo de 100 caracteres!");
        formValidation.validBairro = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.bairro.push("preencha o campo");
        formValidation.validBairro = true;
        toReturn = true;
    }

    if(nome.trim().length > 10){
        formValidation.numero.push("Limite maximo de 100 caracteres!");
        formValidation.validNumero = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.numero.push("preencha o campo");
        formValidation.validNumero = true;
        toReturn = true;
    }


    if(nome.trim().length > 50){
        formValidation.cidade.push("Limite maximo de 100 caracteres!");
        formValidation.validCidade = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.cidade.push("preencha o campo");
        formValidation.validCidade = true;
        toReturn = true;
    }

    if(nome.trim().length > 50){
        formValidation.estado.push("Limite maximo de 100 caracteres!");
        formValidation.validEstado = true;
        toReturn = true;
    }

    if(nome.trim().length === 0){
        formValidation.estado.push("preencha o campo");
        formValidation.validEstado = true;
        toReturn = true;
    }

    state = {toReturn,formValidation}
    return state;
}