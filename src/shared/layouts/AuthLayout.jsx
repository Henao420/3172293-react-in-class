import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input, Button } from "@/shared";
import DeleteCounter2 from "../components/DeleteCounter2";
import EffectDemo from "../components/EffectDemo";

export default function AuthLayout() {
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
                            placeholder="Ingrese su nombre"
                            htmlFor="name"
                        />
                        <Input
                            label="Documento"
                            type="text"
                            placeholder="Ingrese su numero de documento"
                            htmlFor="user-document-number"
                        />

                            {/* Actions */}
                        <div className="flex gap-6 items-center">
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
                        <div className="mt-10">
                            <h1>Ejemplo useState</h1>
                            <DeleteCounter2 />
                        </div>

                        <EffectDemo />

                    <Outlet />
                </main>
            </div>
        </>
    );
}