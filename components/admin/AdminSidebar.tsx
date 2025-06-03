
import AdminRoute from "./AdminRoute"
import { faBowlRice, faChartLine, faBars } from "@fortawesome/free-solid-svg-icons"
/**
 * Arreglo de rutas de navegación disponibles para el panel de administración.
 * Cada objeto contiene la URL, el texto del enlace, si se abre en una nueva pestaña y su ícono correspondiente.
 */
const adminNavigation = [
    {url: '/admin/products', text: 'Productos', blank: false, icon: faBowlRice},
    {url: '/admin/sales', text: 'Análisis de ventas', blank: false, icon: faChartLine},
    {url: '/order/rice', text: 'Ver Menú', blank: true, icon: faBars},
]
/**
 * Componente lateral de navegación para el panel de administración.
 * Renderiza una lista de enlaces definidos en `adminNavigation` usando el componente `AdminRoute`.
 *
 * @returns {JSX.Element} Barra lateral de navegación para el administrador
 */
export default function AdminSidebar() {

    return (
        <>
            <div className="space-y-3">
                <p className="pt-5 uppercase font-bold text-lg text-gray-200 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {
                        adminNavigation.map(link => (
                            <AdminRoute
                            key={link.url}
                            link={link}
                            />
                        ))
                    }
                </nav>
            </div>
        </>

    )
}
