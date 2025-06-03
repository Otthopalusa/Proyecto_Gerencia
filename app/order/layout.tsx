import { linksHome } from "@/Data";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";
import ToastNotification from "@/components/Ui/ToastNotification";
import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

/**
 * Layout principal para la sección de pedidos (`/order/[slug]`).
 *
 * Este componente define la estructura visual de las páginas de pedido, incluyendo:
 * - Barra de navegación superior.
 * - Barra lateral izquierda para selección de categorías de productos.
 * - Resumen de la orden actual al lado derecho.
 * - Notificaciones y pie de página.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {React.ReactNode} props.children - Componentes hijos renderizados en el `main` (por ejemplo, la vista de productos).
 * @returns {JSX.Element} Estructura de layout para la página de pedidos.
 */
export default function RootLayout({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
        const links = linksHome
    return (
        <>
            <Navbar links={links} pathname="/order/rice"/>
            <div className="md:flex bg-gray-200">
                <OrderSidebar/>
                <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
                    {children}
                </main>
                <OrderSummary/>
                <ToastNotification/>
            </div>
            <Footer/>
        </>
    )
}
