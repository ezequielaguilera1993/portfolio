import { useForm } from "react-hook-form";

import Style from "./Form.module.scss";
import emailjs from 'emailjs-com'
import { useEffect } from "react";

interface IinformationObject {
    name: string; mail: string; phone: string; message: string;
};

function sendMail(informationObject: { name: string, mail: string, phone: string, message: string }) {
    emailjs.send("gmail", "template_2tshsrs", informationObject, "user_1aZLUJ4EJdglFQR5mfcZ1")
        .then(() => alert(JSON.stringify(informationObject)))
        .catch(() => alert("error"))
}




export function Form() {



    useEffect(() => {


        function objectToPlainArray(obj: any) {
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

        function showMeChangesCreator(objCreator: Function) {

            let objInit = objectToPlainArray(objCreator())

            return function () {
                let objForward = objCreator()
                objForward = objectToPlainArray(objForward)
                console.log("objInit", objInit)
                console.log("objForward", objForward)
                console.log("///////////////////")
                for (let e in objInit) {
                    if (objInit[e] !== objForward[e])
                        console.log("🎉" + "Init: " + e + "|||", "Forward: " + objForward[e] + "💖")
                }
                console.log("///////////////////")
            }
        }

        const showMeChanges = showMeChangesCreator(() => document.getElementById(Style.divEditable))


        window.addEventListener("keyup", () => {
            showMeChanges()
        })

        // //Mapeo, y maxima cantidad de m que entran bien
        // let mapChar: any = { "0": 12, "1": 6, "2": 13, "3": 10, "4": 13, "5": 10, "6": 11, "7": 10, "8": 10, "9": 11, " ": 0, "!": 4, "\"": 3, "#": 6, "$": 8, "%": 10, "&": 9, "'": 2, "(": 6, ")": 6, "*": 5, "+": 6, ",": 3, "-": 6, ".": 3, "/": 8, ":": 4, ";": 4, "<": 6, "=": 6, ">": 6, "?": 13, "@": 11, "A": 17, "B": 18, "C": 14, "D": 16, "E": 14, "F": 18, "G": 14, "H": 19, "I": 10, "J": 9, "K": 18, "L": 14, "M": 22, "N": 18, "O": 12, "P": 15, "Q": 14, "R": 16, "S": 13, "T": 14, "U": 16, "V": 17, "W": 22, "X": 16, "Y": 16, "Z": 14, "[": 6, "]": 6, "^": 5, "_": 5, "`": 4, "a": 6, "b": 6, "c": 5, "d": 6, "e": 4, "f": 3, "g": 5, "h": 6, "i": 3, "j": 2, "k": 6, "l": 4, "m": 10, "n": 7, "o": 5, "p": 6, "q": 5, "r": 5, "s": 4, "t": 4, "u": 6, "v": 6, "w": 7, "x": 6, "y": 5, "z": 6, "{": 6, "|": 4, "}": 6, "~": 6, "": 8, "": 4, " ": 3, "¡": 4, "¢": 7, "£": 7, "¤": 4, "¥": 9, "¦": 4, "§": 13, "¨": 4, "©": 13, "ª": 4, "«": 7, "¬": 6, "­": 0, "®": 8, "¯": 4, "°": 2, "±": 6, "²": 6, "³": 4, "´": 4, "µ": 6, "¶": 11, "·": 3, "¸": 4, "¹": 2, "º": 3, "»": 7, "¼": 8, "½": 10, "¾": 9, "¿": 11, "À": 17, "Á": 17, "Â": 17, "Ã": 17, "Ä": 17, "Å": 17, "Æ": 27, "Ç": 14, "È": 14, "É": 14, "Ê": 14, "Ë": 14, "Ì": 10, "Í": 10, "Î": 10, "Ï": 10, "Ð": 16, "Ñ": 18, "Ò": 12, "Ó": 12, "Ô": 12, "Õ": 12, "Ö": 12, "×": 6, "Ø": 12, "Ù": 16, "Ú": 16, "Û": 16, "Ü": 16, "Ý": 16, "Þ": 15, "ß": 6, "à": 6, "á": 6, "â": 6, "ã": 6, "ä": 6, "å": 6, "æ": 6, "ç": 5, "è": 4, "é": 4, "ê": 4, "ë": 4, "ì": 3, "í": 3, "î": 3, "ï": 3, "ð": 5, "ñ": 7, "ò": 5, "ó": 5, "ô": 5, "õ": 5, "ö": 5, "÷": 6, "ø": 5, "ù": 6, "ú": 6, "û": 6, "ü": 6, "ý": 5, "þ": 6, "ÿ": 5, }

        // let maxms = 165

        // //Busco el elemento

        // //Calculo el maximo de ancho, segun las m que se que entran
        // const element: any = document.getElementById(Style.divEditable);
        // const maxWidth: number = maxms * mapChar.m

        // //Agrego listener de tecla levantada, hace una suma mapeada de todo el value del textarea, si esa suma es mayor a la cantidad de m que entran por el tamaño de m, entonces inhabilita el text area

        // element?.addEventListener("keydown", (value: any) => {
        //     const element: any = document.getElementById(Style.divEditable);

        //     let pixWidth: number = 0
        //     if (element) {
        //         for (let i = 0; i < element.value.length; i++) {
        //             if (mapChar[element.value[i]]) pixWidth += mapChar[element.value[i]]
        //         }
        //         if (pixWidth >= maxWidth) {
        //             element.maxLength = element.value.length
        //         }

        //         else { element.maxLength = 524288 }
        //     }
        //     console.log(element.maxLength, 'element.maxLength')
        //     console.log(pixWidth, 'pixWidth')
        //     console.log(maxWidth, 'maxWidth')
        //     pixWidth = 0

        // })
    }, [])





    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm({
        mode: "onBlur" // "onChange"
    });
    const onSubmit = (data: IinformationObject) => {
        sendMail(data)
    };

    console.log('Aca!')

    return (
        <div id={Style.Container} >
            {/* <form>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Hola</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Juan</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Como</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Estas</div>
            </form> */}


            <img src="https://i.imgur.com/Dz4ynCf.jpg" id={Style.backgroundImage} />

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                <div id={Style.name} className={Style.inputContainer}>
                    <label htmlFor="name">Nombre: </label>
                    <input autoComplete="on"
                        placeholder='Florencia'
                        {...register("name", { required: false })}
                        type="text"
                    />
                    {errors.name && <p>This is required</p>}
                </div>

                <div id={Style.mail} className={Style.inputContainer}>
                    <label htmlFor="mail" placeholder='"florencia1990@hotmail.com"'>
                        Email: </label>
                    <input autoComplete="on"  {...register("mail", { required: true })} type="mail" placeholder='florencia1990@hotmail.com' />
                    {errors.mail && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div id={Style.phone} className={Style.inputContainer}>
                    <label htmlFor="phone">Teléfono: </label>
                    <input autoComplete="on"
                        {...register("phone", { required: false })} type="tel"
                        placeholder='"+541128676833"'
                    />
                    {errors.phone && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div id={Style.message} className={Style.inputContainer}>
                    <label htmlFor="message">Nota: </label>
                    <textarea id={Style.divEditable} contentEditable={true}
                        placeholder='[...]'
                        {...register("message", { required: false })}
                        rows={8}
                    >
                    </textarea>
                    {errors.message && <p>Campo requerido para poder contactarme</p>}
                </div>

                {/* <input type="submit" /> */}
            </form>

        </div>
    );
}

