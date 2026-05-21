import { Outlet } from "react-router-dom";
import authBg from "@/assets/images/bg-1.png";
import { Input } from "@/shared";

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
                        <input
                            label="Nombre"
                            type="text"
                            placeholder="Ingrese su nombre"
                        />
                        <h1>Yo soy Auth</h1>
                    <Outlet />
                </main>
            </div>
        </>
    );
}