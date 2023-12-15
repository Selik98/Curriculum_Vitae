
import React from "react";
import "../../css/contacto.css";
import { useForm } from "react-hook-form";

function Contacto() {
    const {
        register,
        formState: { errors },
        handleSubmit,
        trigger
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    const validateField = async (fieldName) => {
        await trigger(fieldName);
    };

    return (
        <div className="contacto">
            <div className="info">
                <h1 className="bodyTitle">Contacto</h1>

                <h4>Telefono</h4>
                <p>+54 9 11 2401-3261</p>
                <h4>Mail</h4>
                <p>Mkiesel98@gmail.com</p>

            </div>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="data">
                    <div className="campo">
                        <label>Nombre</label>
                        <input
                            type="text"
                            {...register("nombre", {
                                required: "Por favor ingrese su nombre"
                            })}
                            onBlur={() => validateField("nombre")}
                        />
                        {errors.nombre && <p className="error">{errors.nombre.message}</p>}
                    </div>
                    <div className="campo">
                        <label>Apellido</label>
                        <input
                            type="text"
                            {...register("apellido", {
                                required: "Por favor ingrese su apellido"
                            })}
                            onBlur={() => validateField("apellido")}
                        />
                        {errors.apellido && <p className="error">{errors.apellido.message}</p>}
                    </div>
                </div>
                <div className="data">
                    <div className="campo">
                        <label>Email</label>
                        <input
                            type="text"
                            {...register("email", {
                                required: "Por favor ingrese su email",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: "Por favor ingrese un email válido"
                                }
                            })}
                            onBlur={() => validateField("email")}
                        />
                        {errors.email && <p className="error">{errors.email.message}</p>}
                    </div>
                    <div className="campo">
                        <label>País</label>
                        <select {...register('país')}>
                            <option value='ar'>Argentina</option>
                            <option value='br'>Brasil</option>
                            <option value='cl'>Chile</option>
                            <option value='co'>Colombia</option>
                            <option value='us'>Estados Unidos</option>
                            <option value='mx'>México</option>
                            <option value='pe'>Perú</option>
                        </select>
                    </div>
                </div>
                <div className="data extra">

                <div className="campo">
                    <label>Mensaje</label>
                    <textarea
                        {...register("mensaje", {
                            required: "El mensaje no puede quedar en blanco"
                        })}
                        onBlur={() => validateField("mensaje")}
                    />
                    {errors.mensaje && <p className="error">{errors.mensaje.message}</p>}
                </div>

                <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Contacto;
