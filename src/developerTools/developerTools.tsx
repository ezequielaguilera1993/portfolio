
import Styles from "./developerTools.module.scss";

//AUTOPUSH
// npm run git -- ""



export function vh(percentaje: number): number {
    if (percentaje <= 100 && percentaje >= -100) {
        return window.screen.availHeight * percentaje / 100
    }
    else return 0
}
export function vw(percentaje: number) {
    if (percentaje <= 100 && percentaje >= -100) {
        return window.screen.availWidth * percentaje / 100
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
                        elemStyle.margin = "20px"
                    }
                    console.log(cacheObject)
                }

                else if (once === false) {
                    console.log('Aca!', once)
                    once = true
                    for (let i = 0; i < allElems.length; i++) {
                        allElems[i].style.border = ""
                        allElems[i].style.margin = ""
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