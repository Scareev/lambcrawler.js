import * as Mina from "./choices/mine.js";
import * as Player from "./data/player_data.js";
import promptSync from 'prompt-sync';

let main = true;
const version = '1.0.1';

const prompt = promptSync({ sigint: true });
const p = Player.player

export function c(color, txt){
    switch(color){
        case 'verde':
            return console.log("\x1b[32m%s\x1b[0m", txt);
        case 'vermelho':
            return console.log("\x1b[31m%s\x1b[0m", txt);
        default:
            return console.log("ERRO, COR INEXISTENTE");
    }
}

function choice_action(arg){
    switch(arg){
        case 'm':
            if (!(p.item_equipado == null)) {
            console.log("\n"+"Iniciando mineração..."+"\n");
            Mina.minerar();
            break; }
            else {
                c("vermelho", "\n"+"SEM PICARETA"+"\n");
                break;
            }

        case 's':
            c("verde", "\n"+"Obrigado por jogar!"+"\n"+"Jogo feito por: Heitor Junqueira"+"\n");
            main = false;
            break;
        case 'i':
            c("verde", "\n"+p.mostrar_inventario()+"\n")
            break;
        case 'l':
            c("verde", "\n"+ "Entrando na loja..." + "\n")

        default:
            c("vermelho", "\n"+"Comando invalido, tente outro."+"\n");
    }
}

function menu(){
    console.log("---LAMBCRAWLER " + version +"---" + "\n");
    c('verde', p.mostrar_info());
    console.log("AÇÕES: m(minerar) / c(caçar - WIP) / i(inventário) / l(loja - WIP) / s(sair)");
    const choice = prompt("ESCOLHA: ");
    choice_action(choice);
}

while(main){menu();}