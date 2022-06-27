const sarah = {
    name: 'Sarah',
    idade: 26,
    casado: true,
    trabalho: 'Engenheira' 
}

const maria = { 
    name: 'Maria',
    idade: 23,
    casado: false,
    trabalho: 'engenheira' 
}

// Para resolver isso vamos usar a feature Enum do TypeScript para criar o enum Profissao
enum Profissao {
    Professor,
    Engenheiro,
    Pintor,
    Porteiro
}

// E para garantir que o enum vai ser usado corretamente, vamos criar um tipo Pessoa também
type Pessoa = {
    name: string,
    idade: number,
    casado: boolean,
    trabalho: Profissao 
}

const gabriel: Pessoa = {
    name: 'Gabriel',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro 
}

const mario: Pessoa = {
    name: 'Mario',
    idade: 26,
    casado: false,
    trabalho: Profissao.Engenheiro 
}