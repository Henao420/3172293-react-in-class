// sre/features/users/pages/UserListPage.js
import { DataTable, Button } from "@/shared";
import { UserColumns } from "../table/UserColumns"
import { users } from "../data/users";
import { Link } from "react-router-dom";

export default function UserListPage() {
    return(
        <div className="p-6">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-semibold">
                    <div className="">
                        Listado de usuarios
                    </div>
                </h1>
                <div className="flex gap-12">
                    <Button
                        size="sm"
                        variant="primary"
                        >
                        Reporte de usuario
                    </Button>
                    <Link to="/dashboard/userCreate">
                        <Button
                            size="sm"
                            variant="primary"
                            >
                            Crear usuario
                        </Button>
                    </Link>
                </div>
            </div>
            <DataTable data={users} columns={UserColumns} />
        </div>
    );
}