import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { 
    Input, 
    Button, 
    // DeleteCounter2,
    Select,
    Checkbox } from "@/shared";
import { getDocumentTypes } from "../../services/selectService.js";

export default function AuthLayout() {

    // Estado para los tipos de documento
    const [documentTypes, setDocumentTypes] = useState([])

    // Uso del estado useEffect
    useEffect(() => {
        getDocumentTypes().then(setDocumentTypes);
    }, [])

    return (
        <>
            <div 
                className="min-h-screen w-full"
                style={{
                    backgroundImage: `url(${authBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <main className="mx-auto">
                        <Input
                            label="Nombre"
                            type="text"
                            placeholder="Ingrese su nombre"
                            htmlFor="user-name"
                            variant="primary"
                            size="lg"
                        />
                        <Input
                            label="Correo"
                            type="email"
                            placeholder="Ingrese su correo"
                            htmlFor="user-email"
                        />
                        <Input
                            label="Teléfono"
                            type="tel"
                            placeholder="Ingres e su numero de teléfono"
                            htmlFor="user-phone"
                        />
                        <Input
                            label="Tipo de Documento"
                            type="text"
                            placeholder="Ingrese su tipo de documento"
                            htmlFor="name"
                        />
                        <Input
                            label="Documento"
                            type="text"
                            placeholder="Ingrese su numero de documento"
                            htmlFor="user-document-number"
                        />

                            {/* Actions */}
                        <div className="flex gap-6 items-center mt-2">
                            <Button
                                variant="secondary"
                                size="sm"
                                type="button"
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

                            {/* Implementacion del estado useState */}
                        {/* <div className="mt-10">
                            <h1>Ejemplo sin useState</h1>
                            <DeleteCounter2 />
                        </div> */}

                            {/* Implementacion del estado useEffect
                        <div className="mt-12">
                            <h1>Este es mi useEffect</h1>
                            <EffectDemo />
                        </div> */}

                        {/* <CounterEffect /> */}

                        <Select
                            label="Tipos de documento"
                            name="userDocumentTypes"
                            htmlFor="userDocumentTypes"
                            options={documentTypes}
                        />

                        <Checkbox/>
                    <Outlet />
                </main>
            </div>
        </>
    );
}