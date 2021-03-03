export default class Poki{
    constructor(data){
        this.name = data.name
        this.img = data.img || data.sprites.front_default
        this.weight = data.weight
        this.height = data.height
    
}
get ActiveTemplate(){
    return /*html*/`
    <div class ="card">
        <div class ="card-body">
            <h3 class="card-title">Pokemon:${this.name}</h3>
            <img src="${this.img}">
            <p class="card-text">Weight: ${this.weight}</p>
            <p class="card-text">Height: ${this.height}</p>
        </div>
    </div>
`
}
}