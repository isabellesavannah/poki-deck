import { ProxyState } from "../AppState.js"
import { apiPokiService} from "../Services/ApiPokiService.js"

function _drawApiPoke(){
    let poki = ProxyState.poki
    let template = ""
    poki.forEach(pokemon=> template += `<li onclick ="app.apiPokiController.setActivePoki('${pokemon.name}')">Pokemon: ${pokemon.name}</li>`)
    document.getElementById("api-poki").innerHTML =template;
}
function _drawActivePoki(){
    if(ProxyState.activePoki){
        document.getElementById("active-poki").innerHTML = ProxyState.activePoki.ActiveTemplate
    }else{
        document.getElementById("active-poki").innerHTML = ""
    }
}
export default class ApiPokiController{
    constructor(){
        ProxyState.on("poki", _drawApiPoke)
        ProxyState.on("activePoki", _drawActivePoki)
    }
    setActivePoki(name){
        apiPokiService.setActivePoki(name)
    }
}