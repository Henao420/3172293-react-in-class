import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input } from "@/shared";
import { Button } from "@/shared";

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
                            size="md"
                        />
                        <Input
                            label="Correo"
                            type="email"
                            placeholder="Ingrese su correo"
                            htmlFor="user-email"
                            size="md"
                        />
                        <Input
                            label="Teléfono"
                            type="tel"
                            placeholder="Ingrese su numero de teléfono"
                            htmlFor="user-phone"
                            size="md"
                        />
                        <Input
                            label="Tipo de Documento"
                            type="text"
                            placeholder="Ingrese su nombre"
                            htmlFor="name"
                            size="md"
                        />
                        <Input
                            label="Documento"
                            type="text"
                            placeholder="Ingrese su numero de documento"
                            htmlFor="user-document-number"
                            size="md"
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
                        </div>
                        <h1>Yo soy Auth</h1>
                    <Outlet />
                </main>
            </div>
        </>
    );
}