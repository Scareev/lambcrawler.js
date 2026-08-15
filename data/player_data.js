import {lista_de_picaretas} from "./mine_data.js"
import {c} from "../main.js"

class Player{
    constructor(nome, vida, mana, dinheiro, inventario, item_equipado){
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.dinheiro = dinheiro;
        this.inventario = inventario;
        this.item_equipado = item_equipado;
    }
    
    mostrar_info(){
        return "PLAYER: " + this.nome + "\n" +
            "VIDA: " + this.vida + "\n" +
            "DINHEIRO: " + this.dinheiro + "\n" +
            "ITEM EQUIPADO: " + (this.item_equipado != null ? this.item_equipado.mostrar_info() : "Vazio") +"\n"
    }

    mostrar_inventario(){
        let inv = [];
        for (let [item, quantidade] of Object.entries(this.inventario)){
            inv.push(item + ": "+ quantidade + "\n");
        }
        return (inv);
    }

    adicionar_item(item, quantidade = 1){
        if (!(item in this.inventario)){
            return this.inventario[item] = quantidade
        } else {
            return this.inventario[item] += quantidade
        }
    }
}

let player_inventario = {
};

export const player = new Player(
    "TESTER", 
    100, 
    80, 
    100, 
    player_inventario, 
    lista_de_picaretas[0]);