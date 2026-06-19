//@author: luisOrteg

/*  */

export class Viltrum {

    #range = ""
    constructor(name, range, position, power) {
        this.name = name
        this.#range = range
        this.position = position
        this.power = power
    }

    id() {
        let id = null
        if (this.#range === "S") {
            id = this.name[0] + this.name[1] + this.name[2] + "00Vil" + this.power/4
            return id
        }
        id = this.name[0] + this.name[1] + this.name[2] + "00xcode" + this.power
        return id
    }


    // getter
    get range(){
        return this.#range
    }
}

export function build() {
    return 'Imperio Viltrumita se reconstruye..'
}

export const GOAL = "fiel a Viltrum"

let regente = new Viltrum("Thragg", "S", "regente", 88000)
console.log(regente.id())

export default function view(viltrumitaOne, viltrumitaTwo) {
    if (viltrumitaOne.power > viltrumitaTwo.power){
        console.log(`${viltrumitaOne.name} vs ${viltrumitaTwo.name} es mas poderoso ${viltrumitaOne.name} con su gran poder y rango ${viltrumitaOne.range}`)
        console.log(`Ganando por ${viltrumitaOne.power - viltrumitaTwo.power} pts. de poder viltrum`)
    } else if (viltrumitaTwo.power > viltrumitaOne.power) {
        console.log(`${viltrumitaOne.name} vs ${viltrumitaTwo.name} es mas poderoso ${viltrumitaTwo.name} con su gran poder y rango ${viltrumitaTwo.range}`)
    }
}