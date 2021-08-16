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

function cartJumpsCounter(id: string, cb: Function) {
    let element: any = document.getElementById(id)
    element?.addEventListener("keydown", (value: any) => {
        if (element) {
            cb(element)
            let { value, clientHeight, offsetHeight, scrollHeight, textLength, selectionEnd,
                selectionStart } = element
            console.log(value, clientHeight, offsetHeight, scrollHeight, textLength, selectionEnd, selectionStart);

        }
    })
}

export function Form() {
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

    useEffect(() => {
        cartJumpsCounter(Style.divEditable, (a: string) => console.dir(a))
    })

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
                        maxLength={300}
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

