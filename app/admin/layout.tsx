import AdminSidebar from "@/components/admin/AdminSidebar";
import Navbar from "@/components/Home/Navbar";
import ToastNotification from "@/components/Ui/ToastNotification";
import { linksHome } from "@/Data";

/**
 * Componente de layout para la sección administrativa.
 *
 * Proporciona la estructura principal de la interfaz administrativa incluyendo:
 * - Navbar con enlaces definidos en `linksHome`.
 * - Sidebar de administración.
 * - Área principal donde se renderizan los componentes hijos.
 * - Notificaciones tipo toast.
 *
 * @param children - Contenido dinámico que será renderizado dentro del layout.
 *
 * @returns JSX.Element con la estructura completa del layout administrativo.
 */
export default async function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const links = linksHome
    return (
        <>
            <Navbar links={links} pathname="/admins/orders"/>
            <div className="md:flex">
                <aside className="md:w-72 md:h-screen bg-black">
                    <AdminSidebar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}