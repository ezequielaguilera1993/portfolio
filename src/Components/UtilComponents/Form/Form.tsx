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
        <div id={Style.Container} >
            {/* <form>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Hola</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Juan</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Como</div>
                <div className={Style.divs} style={{ padding: "0px", margin: "0px" }}>Estas</div>
            </form> */}


            <img src="https://i.imgur.com/jbw9aC3.jpg" id={Style.backgroundImage} />

            <form onSubmit={handleSubmit(onSubmit)} autoComplete="on">
                <div id={Style.name}>
                    <label htmlFor="name">Nombre</label>
                    <input autoComplete="on"
                        placeholder='"Florencia"'
                        {...register("name", { required: false })}
                    />
                    {errors.name && <p>This is required</p>}
                </div>

                {/* <div>
                    <label htmlFor="mail" placeholder='"florencia1990@hotmail.com"'>
                        Email
                    </label>
                    <input autoComplete="on"  {...register("mail", { required: true })} type="mail" placeholder='"florencia1990@hotmail.com"' />
                    {errors.mail && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div>
                    <label htmlFor="phone">Telefono</label>
                    <input autoComplete="on"
                        {...register("phone", { required: false })} type="tel"
                        placeholder='"+541128676833"'
                    />
                    {errors.phone && <p>Campo requerido para poder contactarme</p>}
                </div>

                <div>
                    <label htmlFor="message">Nota</label>
                    <div contentEditable={true}
                        placeholder='[...]'
                        {...register("message", { required: false })}
                        style={{ height: "100px", textAlign: "start", borderRadius: "80px" }}
                    ></div>

                    {errors.message && <p>Campo requerido para poder contactarme</p>}
                </div>
                <input type="submit" /> */}
            </form>

        </div>
    );
}

