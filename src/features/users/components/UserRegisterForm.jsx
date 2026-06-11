//UserRegisterForm componente para registrar un usuario

import { useState, useEffect } from "react"
import { Input, Select, Checkbox, Button } from "@/shared"
import { getDocumentTypes } from "@/services/selectService"

export default function UserRegisterForm() {
        // Estado del formulario
    const [formData, setFormData] = useState({
        userName: "",
        userEmail: "",
        userPhone: "",
        userDocumentType: "",
        userDocumentNumber: "",
        userPassword: "",
        userImage: [],

        // Flags booleanos
        isStaff: false,
        isActive: true,
        isSuperUser: false,
    });

    // Estado para los tipos de documento
    const [documentTypes, setDocumentTypes] = useState([])
    
    // Uso del estado useEffect
    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    }, [])

    // ==================================
    //         Handle Generico
    // ==================================
    /**
    * Funcion que se ejecuta cada vez que cambia el valor de un input del formulario
    */

    const handleChange = (e) => {
        // Se obtiene el nombre del campo y su valor
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            // Se copian todos los valores anteriores del estado
            ...prev,

            [name]: type === "checkbox" ? checked : value,
        }));
    };

    //=========== HANDLE SUBMIT ============
    const handleSubmit = async (e) => {
        // Evita que el formulario recarge la pagina
        e.preventDefault();

        // Validamos los datos del formulario contra el esquema zod
        // safeParse NO lanza excepcion, retorna unn objeto controlado
        const result = userSchema.safeParse(formData)

        // Verificar en consola si el esquema esta funcionando correctamente
        // console.log(result);

        // Si la validacion falla
        if (!result.success) {
            // Objeto donde almacenaremos los errores por campo
            const fieldErrors = {};

            // Recorremos cada error generado por zod
            result.error.issues.forEach((issue) => {
                // issue.path[0] corresponde al nombre del campo
                // issue.message contiene el mensaje de error definido en el schema
                fieldErrors[issue.path[0]] = issue.message;
            });

            // Actualizamos el estado del errores para mostrarlos en la UI
            setErrors(fieldErrors);

            // Cortamos la ejecucion: NO se envia nada al backend

            return;
        }

        // Si la validacion pasa, limpiamos errores previos
        setErrors({});
    }

    return (
        <div>
            <Input
                label="Nombre"
                type="text"
                placeholder="Ingrese su nombre"
                htmlFor="user-name"
            />            
            <Input
                label="Correo"
                type="email"
                placeholder="Ingrese su correo electronico"
                htmlFor="user-email"
            />            
            <Input
                label="Telefono"
                type="tel"
                placeholder="Ingrese su numero de telefono"
                htmlFor="user-phone"
            />
            <Select
                label="Tipos de documento"
                name="userDocumentTypes"
                htmlFor="userDocumentTypes"
                options={documentTypes}
            />         
            <Input
                label="Documento"
                type="text"
                placeholder="Ingrese su numero de documento"
                htmlFor="user-document-number"
            />          
            <Input
                label="Contraseña"
                type="password"
                placeholder="Ingrese su contraseña"
                htmlFor="user-password"
            />          

                {/* Checkbox */}

            <Checkbox
                id="isSuperUser"
                name="isSuperUser"
                label="Es super usuario"
                checked={formData.isSuperUser}
                onChange={handleChange}
            />
            <Checkbox
                id="isStaff"
                name="isStaff"
                label="Es staff"
                checked={formData.isStaff}
                onChange={handleChange}
            />
            <Checkbox
                id="isActive"
                name="isActive"
                label="Esta Activo"
                checked={formData.isActive}
                onChange={handleChange}
            />

                {/* Actions */}
            <div className="flex gap-6 items-center">
                <Button
                    variant="secondary"
                    size="sm"
                    type="submit"
                    onClick={() => console.log("Se oprimio el cancelar")}
                >
                    Cancelar
                </Button>
                <Button
                    variant="primary"
                    size="md"
                    type="submit"
                    onClick={() => console.log("Se oprimio el submit")}
                >
                    Guardar
                </Button>
            </div>{/* Actions */}            
        </div>
    )

}