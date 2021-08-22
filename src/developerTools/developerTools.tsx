
// import Styles from "./developerTools.module.scss";

//AUTOPUSH
// npm run git -- ""



export function objectToPlainArray(obj: any) {
    let AAA = obj
    let BBB: any = {};

    let c = 100

    while (c) {
        Object.entries(AAA)
        c--
        for (let e in AAA) {
            // console.log("Aca!")
            if (typeof AAA[e] !== "object") {
                BBB[e] = AAA[e]
            }
            else {
                BBB = { ...BBB, ...AAA[e] }
            }
        }
        AAA = { ...BBB }
        BBB = {}
    }
    return AAA
}
//obtener fecha

export function fecha() {
    var m = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
    var ds = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    var f = new Date();
    return ds[f.getDay()] + " " + f.getDate() + " de " + m[f.getMonth()] + " de " + f.getFullYear()
}
/**
@example
let showMeChanges=showMeChangesCreator(useRef<HTMLTextAreaElement>(null))

window.addEventListener("keyup", () => {
showMeChanges()
})

window.addEventListener("click", () => {
showMeChanges()
}) [...etc]
*/




export function showMeChangesCreator(ref: React.RefObject<HTMLTextAreaElement>) {

    if (ref.current) {
        let objCreator: HTMLTextAreaElement = ref.current
        let objInit = objectToPlainArray(objCreator)

        return function () {
            let objForward = objectToPlainArray(objCreator)
            // console.log("objInit", objInit)
            console.log("objForward", objForward)
            console.log("///////////////////")
            for (let e in objInit) {
                if (objInit[e] !== objForward[e])
                    console.log("🎉 Init: " + e + " ||| Forward: " + objForward[e] + "💖")
            }
            console.log("////////////////////////////////////////////////////////////////////////////")
        }
    }
    else return () => { alert("Error!") }
}


export function smallScreen() {
    return vw(100) < 1000 ? true : false
}

export function vh(percentaje: number): number {
    if (percentaje <= 100 && percentaje >= -100) {
        return window.innerHeight * percentaje / 100
    }
    else return 0
}
export function vw(percentaje: number) {
    if (percentaje <= 100 && percentaje >= -100) {
        return window.innerWidth * percentaje / 100
    }
    else return 0
}

export const iWantCarJumps = (textWithCarJumps: string, divOrBr: "div" | "br") => {
    if (divOrBr === "div") {
        return (
            <>
                {textWithCarJumps.split("\n").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })}
            </>);
    }
    else if (divOrBr === "br") {
        const brutArray = textWithCarJumps.split("\n")
        return brutArray.reduce<Array<any>>((acc, e) => {
            acc.push(e, <br />)
            return acc
        }, [])
    }
}



export function repeat(iterationsA: number, iterationsB: number = 1, cb: Function,) {

    for (let i = iterationsA; i <= iterationsB; ++i) {
        cb(i, i - 1, iterationsB - i, iterationsB - i - 1)
    }
}


export function objToString(obj: any) {
    var str = '';
    for (var p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            str += '"' + p + '":' + obj[p] + ",  ";
        }
    }
    return "{" + str + "}";
}

export function TopBottomOfScreen(whenTop: Function, whenBottom: Function) {
    window.addEventListener("scroll", () => {
        const innerHeight = window.innerHeight /* || document.documentElement.clientHeight ||
      document.body.clientHeight; */
        let HTML = document.documentElement
        var HTMLmeasures = HTML.getBoundingClientRect();
        console.log(HTMLmeasures.bottom, HTMLmeasures.top, innerHeight)
        if (HTMLmeasures.top === 0) whenTop()
        //Si lo que le falta par alo ultimo, es tu viewport, ejecuta la alerta
        if (!Math.round(innerHeight - HTMLmeasures.bottom)) whenBottom()
    });
}







interface IdeveloperTools {
    consoleInfo?: boolean;
    showMargins?: boolean;
    marginSize?: number
}
let once = true
export const developerTools = function ({ consoleInfo = false, showMargins = false, marginSize = 1 }: IdeveloperTools) {
    if (showMargins) {
        window.addEventListener("keydown", function (event) {
            // const p = document.createElement("p");
            let allElems: any;

            if (event.key === "m") {
                allElems = document.getElementsByTagName("*");
                let cacheObject = []
                if (once === true) {
                    console.log('Aca!', once)
                    once = false
                    for (let i = 0; i < allElems.length; i++) {
                        const elemStyle = allElems[i].style
                        cacheObject.push({ border: elemStyle.border, margin: elemStyle.margin })
                        elemStyle.border = marginSize + "px solid green"
                        elemStyle.margin = "3px"
                        elemStyle.borderRadius = "3px"
                    }
                    console.log(cacheObject)
                }

                else if (once === false) {
                    console.log('Aca!', once)
                    once = true
                    for (let i = 0; i < allElems.length; i++) {
                        allElems[i].style.border = ""
                        allElems[i].style.margin = ""
                        allElems[i].style.borderRadius = ""
                    }
                }
            }
            // p.textContent = `KeyboardEvent: key='${event.key}' | code='${event.code}'`;
            // document.getElementById("output").appendChild(p);
        }, true);

    }

    if (consoleInfo) {
        const threeAndGrave = document.getElementById("root");

        let flag = false
        console.log("Presionar click derecho para encender el consoleInfo!")

        threeAndGrave?.addEventListener('contextmenu', function (ev) {
            flag = !flag
        }, false);

        threeAndGrave?.addEventListener("mouseover", (event: any) => {

            const target = event.target

            if (flag) {

                if (consoleInfo) {
                    console.log("\n\n\n")
                    console.log("〰〰〰〰〰〰〰〰〰〰〰🔴🟠🟡🟢🔵🟣🟤⚫🔘〰〰〰〰〰〰〰〰〰〰〰〰");
                    console.log("~ 🆔 >>>>>> Id >>>>>> ", target.id ? " 💡 " + target.id : "⚫No posee! 📭");
                    console.log("~ 🧾 >>> Classname >>", target.className ? " 💡 " + target.className : "⚫No posee! 📭");
                    console.log("~ 🎫 >>> TagName >>>", target.tagName ? " 💡 " + target.tagName : "⚫No posee! 📭");
                    console.log("~ 🎯 >>> OnClick >>>", target.onclick ? " 💡 " : "⚫No posee! 📭");
                    console.log("~ 👨‍👨‍👧‍👧 >>> ChildElementCount >>>", target.childElementCount ? " 💡 " + target.childElementCount : "⚫No posee! 📭");
                    console.log("~", target)
                    console.dir(target)
                    console.log("〰〰〰〰Click derecho para pausar y reiniciar de imprimir!〰〰〰〰");
                }

            }



        }
        );



    }




}



/* Funcion reloj

 //Genera colores aleatorios
    const randomizeColors = () => {
        const randomColorDecimal = Math.round(Math.random() * 16777215)
        const randomColorHexa = "#" + randomColorDecimal.toString(16)
        return randomColorHexa
    }

    //Declaro useState
    const [color, ªcolor] = useState<string>("")

    //UseEffect (controla que no se dispare)
    useEffect(() => {

        ; (async function clockFunction(c = 0) {//Es recursiva y autoinvocable, funciona como un reloj
            await ªcolor(randomizeColors())
            ++c
            await setTimeout(() => clockFunction(c), 100);
        })()

    }, [])

    //Busca el elemento y le asocia otro color de boxShadow
    const fwButton = document.getElementById(Style.fire)//Busca al elemento
    if (fwButton) fwButton.style.boxShadow = "0 0 0.1rem 0.3rem " + color//Le cambia el bos shadow

*/