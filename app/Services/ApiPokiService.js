import { ProxyState } from "../AppState.js";
import Poki from "../Models/ApiPoki.js";
import { pokiApi } from "./AxiosService.js"


class ApiPokiService{
    constructor(){
        this.getApiPoki()
    }
    async getApiPoki(){
        try{
            const res = await pokiApi.get("")
            console.log(res)
            ProxyState.poki = res.data.results
        } catch (error){
            console.error(error)
            console.log(this.getApiPoki)
        }
    }
    async setActivePoki(name){
        try{
            let res =  await pokiApi.get(name)
            console.log(res)
            ProxyState.activePoki = new Poki(res.data)
        } catch (error){
            console.error(error)
        }
    }
}

export const apiPokiService = new ApiPokiService()