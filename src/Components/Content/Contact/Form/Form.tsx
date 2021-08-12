import { useForm } from "react-hook-form";

import Style from "./Form.module.scss";
import emailjs from 'emailjs-com'

interface IinformationObject {
    name: string; mail: string; phone: string; message: string;
};


function sendMail(informationObject: { name: string, mail: string, phone: string, message: string }) {
    emailjs.send("gmail", "template_2tshsrs", informationObject, "user_1aZLUJ4EJdglFQR5mfcZ1")
        .then(() => alert(JSON.stringify(informationObject)))
        .catch(() => alert("error"))
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

    return (
        <div id={Style.Form} className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input
                        placeholder='"Florencia"'
                        {...register("name", { required: false/* , maxLength: 2  */ })}
                    />
                    {errors.name && <p>This is required</p>}
                </div>

                <div>
                    <label htmlFor="email" placeholder='"florencia1990@hotmail.com"'>
                        Email
                    </label>
                    <input {...register("email", { required: true })} placeholder='"florencia1990@hotmail.com"' />
                    {errors.email && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input
                        {...register("phone", { required: false })}
                        placeholder='"+541128676833"'
                    />
                    {errors.phone && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div>
                    <label htmlFor="message">Cualquier cosa a agregar</label>
                    <input
                        placeholder='"Tengo este proyecto en mente [...] | Me gustaria entrevistarte etc [...] | etc."'
                        {...register("message", { required: false })}
                    />
                    {errors.message && <p>Campo requerido para poder contactarme</p>}
                </div>



                <input type="submit" />
            </form>
        </div>
    );
}

