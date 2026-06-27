// sre/features/users/pages/UserListPage.js
import { DataTable, Button } from "@/shared";
import { UserColumns } from "../table/UserColumns"
import { users } from "../data/users";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReportConfigModal from "../reports/components/ReportConfigModal";

export default function UserListPage() {

    const [isReportModalOpen, setIsReportModalOpen] = useState(false);

    return(
        <div className="p-6">
            <div className="flex justify-between mb-4">
                <h1 className="text-xl font-semibold">
                    Listado de usuarios
                </h1>
                <div className="flex gap-12">
                    <Button
                        size="sm"
                        variant="primary"
                        onClick={() => setIsReportModalOpen(true)}
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
            <ReportConfigModal
                isOpen={isReportModalOpen}
                onClose={() => setIsReportModalOpen(false)}
            />
        </div>
    );
}