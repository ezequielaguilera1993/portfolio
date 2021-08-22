import { useForm } from "react-hook-form";

import Style from "./Form.module.scss";
import emailjs from 'emailjs-com'
import { useEffect, useRef, useState } from "react";
// import { showMeChangesCreator } from "../../../developerTools/developerTools";

interface IinformationObject {
    name: string; mail: string; phone: string; message: string;
};

function sendMail(informationObject: { name: string, mail: string, phone: string, message: string }) {
    emailjs.send("gmail", "template_2tshsrs", informationObject, "user_1aZLUJ4EJdglFQR5mfcZ1")
        .then(() => console.log(JSON.stringify(informationObject)))
        .catch(() => console.log("error"))
}



export function Form() {

    //states
    const [send, ªsend] = useState<boolean>(false)
    //Refs
    let textAreaElement = useRef<HTMLTextAreaElement>(null)
    let textAreaElementMIRROR = useRef<HTMLTextAreaElement>(null)

    let formRef = useRef<HTMLFormElement>(null)

    function sendNote() {
        ªsend(true)

        setTimeout(() => {
            formRef.current?.reset()
            ªsend(false)
        }, 2400)
    }


    function date() {
        var m = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        var ds = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
        var f = new Date();

        return ds[f.getDay()] + " " + f.getDate() + " de " + m[f.getMonth()] + " de " + f.getFullYear()
    }


    useEffect(() => {
        // const show = showMeChangesCreator(textAreaElement)

        let txtArea = textAreaElement.current
        let txtAreaMIRROR = textAreaElementMIRROR.current

        window.addEventListener("keydown", () => {

            // show()

            if (txtAreaMIRROR && txtArea) {

                txtAreaMIRROR.textContent = txtArea?.value + "-"

                // console.log(txtArea.scrollHeight, txtAreaMIRROR.scrollHeight)
                if (txtArea.scrollHeight < txtAreaMIRROR.scrollHeight) {
                    txtArea.maxLength = txtArea.value.length
                }

                else {
                    txtArea.maxLength = 10000
                }
            }

        })

    }, [])





    const {
        register,
        // formState: { },
        handleSubmit
    } = useForm({
        mode: "onBlur" // "onChange"
    });
    const onSubmit = (data: IinformationObject) => {
        sendMail(data)
        sendNote()
    };

    // console.log('Aca!')

    return (
        <div id={send ? Style.ContainerSEND : Style.Container} >
            {/* <form>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Hola</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Juan</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Como</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Estas</div>
            </form> */}


            <img alt="Imágen de fondo del formulario de nota de envio, es una nota de papel" src="https://i.imgur.com/78Mxw6s.jpg" id={Style.backgroundImage} />

            <form ref={formRef} onSubmit={handleSubmit(onSubmit)} autoComplete="on">

                <span id={Style.date} >{date()}</span>

                <div id={Style.name} className={Style.inputContainer}>
                    <label htmlFor="name">Nombre: </label>
                    <input autoComplete="on"
                        placeholder='"Florencia"'
                        {...register("name", { required: false })}
                        type="text"
                    />
                    {/* {errors.name && <p>This is required</p>} */}
                </div>

                <div id={Style.mail} className={Style.inputContainer}>
                    <label htmlFor="mail" placeholder='"florencia1990@hotmail.com"'>
                        Email: </label>
                    <input autoComplete="on"  {...register("mail", { required: false })} type="mail" placeholder='"florencia1990@hotmail.com"' />
                    {/* {errors.mail && <p>Campo requerido para poder contactarme</p>} */}
                </div>

                <div id={Style.phone} className={Style.inputContainer}>
                    <label htmlFor="phone">Teléfono: </label>
                    <input autoComplete="on"
                        {...register("phone", { required: false })} type="tel"
                        placeholder='"+541128676833"'
                    />
                    {/* {errors.phone && <p>Campo requerido para poder contactarme</p>} */}
                </div>

                <div id={Style.message} className={Style.inputContainer}>

                    <label htmlFor="message">Nota: </label>
                    <textarea
                        placeholder='[...]'
                        {...register("message", { required: false })}
                        ref={textAreaElement}
                        rows={8}
                    >
                    </textarea>
                    {/* {errors.message && <p>Campo requerido para poder contactarme</p>} */}
                    <textarea
                        placeholder='[...]'
                        {...register("message", { required: false })}
                        ref={textAreaElementMIRROR}
                        id={Style.textAreaElementMIRROR}
                        rows={8}
                    />
                </div>


                <input id={Style.submit} type="submit" />
            </form>

        </div>
    );
}




