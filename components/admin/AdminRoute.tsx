"use client"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname } from "next/navigation"

/**
 * Propiedades que recibe el componente AdminRoute
 */
type AdminRouteProps = {
    link : {
        /**
         * URL de destino del enlace
         */
        url : string
        /**
         * Texto que se mostrara en el enlace
         */
        text : string
        /**
         * Indica si el enlace se abrira en una nueva pestaña
         */
        blank : boolean
        /**
         * Icono a mostar en el enlace
         */
        icon : IconDefinition
    }
}

/**
 * Componente de navegación lateral para el panel de administración.
 * Muestra un enlace con un ícono y estilos que resaltan si la ruta está activa.
 *
 * @param {AdminRouteProps} props - Propiedades que definen el enlace de administración
 * @returns {JSX.Element} Enlace estilizado para navegación de administración
 */
export default function AdminRoute({link} : AdminRouteProps) {
    const pathname = usePathname()
    const isActive = pathname.startsWith(link.url)
    return (
    <>
        <Link
            className={`${isActive ? 'bg-neutral-900 text-yellow-600': ''} flex items-center gap-3 font-bold text-lg py-2 pl-3 border-t text-white border-gray-200 last-of-type:border-b duration-200 hover:text-yellow-600 relative link-admin`}
            href={link.url}
            target={link.blank ? '_blank' : ''}
        >
            <FontAwesomeIcon className="h-5" icon={link.icon}/>
            {link.text}
        </Link>
    </>
    )
}
