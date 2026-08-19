class Minerios{
    constructor(nome, valor, raridade){
        this.nome = nome;
        this.valor = valor;
        this.raridade = raridade;
    }

    mostrar_info(){
    return  "NOME DO MINÉRIO: " + this.nome + "\n" + 
            "VALOR: " + this.valor + "\n";
    }
}

class Picaretas{
    constructor(nome, durabilidade, valor){
        this.nome = nome;
        this.durabilidade = durabilidade;
        this.valor = valor;
    }

    mostrar_info(){
            return this.nome +" (dur: " + this.durabilidade  + ")"
    }
}

// --------------------- INSTANCIAÇÃO DOS MINÉRIOS --------------------- \\

const m_ferro = new Minerios("Minério de ferro", 40, 1);
const m_ouro = new Minerios("Minério de ouro", 80, 2);
const m_cobalto = new Minerios("Minério de cobalto", 100, 3);

// --------------------- INSTANCIAÇÃO DAS PICARETAS --------------------- \\

const pi_ferro = new Picaretas("Picareta de Ferro", 10, 5);
const pi_ouro = new Picaretas("Picareta de Ouro", 30, 15);
const pi_cobalto = new Picaretas("Picareta de Cobalto", 50, 25);

export const lista_de_minerios = [
    m_ferro, m_ouro, m_cobalto
]

export const lista_de_picaretas = [
    pi_ferro, pi_ouro, pi_cobalto
]