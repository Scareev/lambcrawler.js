import {lista_de_minerios} from '../data/mine_data.js';
import {player} from '../data/player_data.js';
import {c} from '../main.js'

function random_value(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export function minerar(){
    const limite = 1;
    const chance_tabela_minerios = random_value(0, lista_de_minerios.length - 1);
    const minerio_atual = lista_de_minerios[chance_tabela_minerios];

    if (!(player.item_equipado)){
        c("vermelho", "Não há item equipado." + "\n")
        return;
    }

    if (player.item_equipado.durabilidade > limite){
        player.item_equipado.durabilidade -= 1
        player.dinheiro += minerio_atual.valor;
        c("vermelho", "ACHOU: " + "\n\n" + minerio_atual.mostrar_info());
        player.adicionar_item(minerio_atual.nome, 1);
    } 
    
    else {
        player.item_equipado = null;
        c("vermelho", "Sua picareta quebrou! Compre outra." + "\n")
    }

}