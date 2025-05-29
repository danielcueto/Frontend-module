import { useForm, type SubmitHandler } from "react-hook-form";
interface IFormInput {
    nombre: string;
    correo: string;
    password: string;
    confirmar: string;
    fecha: string;
    pais: string;
    file: FileList;
    terminos: boolean;
}

export function TestForm() {

    const { register, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" {...register("nombre", {
                    required: "El nombre es obligatorio",
                    minLength: {
                        value: 3,
                        message: "El nombre debe tener al menos 3 caracteres"
                    }
                })} />
                {
                    errors.nombre && <p className="text-red-500">{errors.nombre.message}</p>
                }

                <label htmlFor="correo">Correo</label>
                <input type="email" id="correo" {...register("correo")} />

                <label htmlFor="password">Contraseña</label>
                <input type="password" id="password" {...register("password")} />

                <label htmlFor="confirmar">Confirmar Contraseña</label>
                <input type="password" id="confirmar" {...register("confirmar")} />

                <label htmlFor="fecha">Fecha de Nacimiento</label>
                <input type="date" id="fecha" {...register("fecha")} />

                <label htmlFor="pais">País</label>
                <select id="pais" {...register("pais")}>
                    <option value="bolivia">Bolivia</option>
                    <option value="argentina">Argentina</option>
                    <option value="brasil">Brasil</option>
                    <option value="chile">Chile</option>
                    <option value="colombia">Colombia</option>
                    <option value="mexico">México</option>
                    <option value="peru">Perú</option>
                    <option value="uruguay">Uruguay</option>
                    <option value="venezuela">Venezuela</option>
                </select>

                <label htmlFor="file">Foto de perfil</label>
                <input type="file" id="file" {...register("file")} />

                <label htmlFor="terminos">Acepto los términos y condiciones</label>
                <input className="block" type="checkbox" id="terminos" {...register("terminos")} />

                <button type="submit">Enviar</button>
                <div>
                    <pre className="bg-gray-100 p-4 mt-4 rounded">
                        {JSON.stringify(watch(), null, 2)}
                    </pre>
                </div>
            </form>
        </>
    );
}