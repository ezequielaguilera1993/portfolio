import { ReactElement } from "react";

interface IdeveloperTools {
    consoleInfo: boolean;
    showMargins?: boolean;
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

export const visualGuide = function ({ consoleInfo, showMargins }: IdeveloperTools) {
    let beforeElement: any;

    if (consoleInfo || showMargins) {
        const threeAndGrave = document.getElementById("root");
        const outLineSize = "1"
        let flag = false
        console.log("Presionar click derecho para encender el consoleInfo!")

        threeAndGrave?.addEventListener('contextmenu', function (ev) {
            flag = !flag
        }, false);

        threeAndGrave?.addEventListener("mouseover", (event: any) => {

            const target = event.target
            if (!beforeElement) beforeElement = target

            if (flag) {

                if (showMargins) {
                    const randomColorDecimal = Math.round(Math.random() * 16777215)
                    const randomColorHexa = "#" + randomColorDecimal.toString(16)
                    target.style.outline = outLineSize + "px solid " + randomColorHexa

                    // target.style.heigth = parseInt(target.style.heigth) - 5 + "px"

                    let childrenLength = target.children.length

                    if (childrenLength > 0) {
                        for (let i = 0; i < childrenLength; i++) {
                            target.children[i].style.outline = outLineSize + "px solid grey"
                        }
                    }

                    if (beforeElement != target) {

                        if (beforeElement.children.length > 0) {
                            for (let i = 0; i < beforeElement.children.length; i++) {
                                beforeElement.children[i].style.outline = "0"
                            }
                        }

                        beforeElement.style.outline = "0"
                        beforeElement = target
                    }
                }


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

            else {
                if (beforeElement.children.length > 0) {
                    for (let i = 0; i < beforeElement.children.length; i++) {
                        beforeElement.children[i].style.outline = "0"
                    }
                }
                beforeElement.style.outline = "0";
            }

        }
        );



    }




}