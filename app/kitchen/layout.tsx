
import Navbar from "@/components/Home/Navbar";
import OrderSideBar from "@/components/kitchen/OrderSideBar";
import ToastNotification from "@/components/Ui/ToastNotification";
import { linksHome } from "@/Data";

/**
 * Layout principal de la sección de cocina.
 *
 * Este componente proporciona la estructura base para las páginas dentro de la ruta `/kitchen`.
 * Incluye un `Navbar`, una barra lateral (`OrderSideBar`) específica para cocina y un contenedor principal para renderizar contenido.
 * También incorpora `ToastNotification` para mostrar alertas al usuario.
 *
 * @param children - Elementos hijos que se renderizarán dentro del layout.
 * @returns Estructura del layout para las vistas de cocina.
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
                    <OrderSideBar />
                </aside>

                <main className="md:flex-1 md:h-screen md:overflow-y-scroll bg-gray-100 p-5">
                    {children}
                </main>
            </div>

            <ToastNotification />
        </>
    )
}