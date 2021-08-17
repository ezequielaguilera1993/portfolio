import { useEffect } from "react"
import { objToString, repeat } from "../../../developerTools/developerTools"


export const CharSizer: React.FunctionComponent<{ maxms: number }> = ({ maxms }) => {
    const charRule = "charRule"

    //Genero el mapa de caracteres:pixeles
    useEffect(() => {
        let mapChar: any = {}

        repeat(32, 128, (i: any) => {
            let char = String.fromCharCode(i)
            const charRuleElement = document.getElementById(charRule)
            if (charRuleElement) charRuleElement.innerText = char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char
            let charW = (charRuleElement?.offsetWidth) ? (charRuleElement?.offsetWidth) / 100 : -1000000
            mapChar[char] = charW
            // console.log(char, i)
        })

        repeat(160, 255, (i: any) => {
            let char = String.fromCharCode(i)
            const charRuleElement = document.getElementById(charRule)
            if (charRuleElement) charRuleElement.innerText = char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char + char
            let charW = (charRuleElement?.offsetWidth) ? (charRuleElement?.offsetWidth) / 100 : -1000000
            mapChar[char] = charW
        })
        //////////////////////////////


        //Funcion a copiar el portapapeles


        const func: string = `

        useEffect(() => {

            //Mapeo, y maxima cantidad de m que entran bien
            let mapChar:any=${objToString(mapChar)}
            let maxms=${maxms}

            //Busco el elemento
            const element: any = document.getElementById("Style.divEditable");

            //Calculo el maximo de ancho, segun las m que se que entran
            const maxWidth: number = maxms * mapChar.m

            //Agrego listener de tecla levantada, hace una suma mapeada de todo el value del textarea, si esa suma es mayor a la cantidad de m que entran por el tamaño de m, entonces inhabilita el text area

            element?.addEventListener("keyup", (value: any) => {
                if (element) {
                    let pixWidth: number = 0
                    for (let i = 0; i < element.value.length; i++) {
                        if (mapChar[element.value[i]]) pixWidth += mapChar[element.value[i]]
                    }
                    console.log(pixWidth)
                    if (pixWidth >= maxWidth) {
                        element.maxLength = element.value.length
                    }
                }
            })
        }, [])
        `



        navigator.clipboard.writeText(func).then(() => {
            alert("Funcion pegada en portapapeles 😁")
        }
        );
    })


    return (<>

        <span id={charRule} style={{ backgroundColor: "#fff", fontFamily: '"Sacramento", cursive' }} />

    </>
    )
}
