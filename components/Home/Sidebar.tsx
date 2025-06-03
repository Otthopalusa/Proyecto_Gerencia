import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'animate.css';
import Link from "next/link";
import Image from "next/image";

type SidebarProps = {
    /**
     * Array de objetos que representan los enlaces a mostrar en la barra lateral.
     * Cada enlace incluye:
     * - `name`: nombre o texto que se mostrará.
     * - `path`: ruta a la que redirige el enlace.
     * - `icon`: icono de FontAwesome que acompaña el texto.
     */
    links: {
        name: string;
        path: string;
        icon: IconDefinition;
    }[]
    /**
     * Ruta actual para comparar y establecer el enlace activo.
     */

    pathname: string
}

/**
 * Componente Sidebar
 *
 * Renderiza una barra lateral fija con animación que muestra un logo y una lista de enlaces.
 * Cada enlace se representa con un icono y texto, y se destaca si coincide con la ruta actual.
 *
 * @param {SidebarProps} props - Propiedades del componente
 * @returns JSX.Element que representa la barra lateral
 */
export default function Sidebar({links, pathname} : SidebarProps) {
    return (
    <>
        
        <div className="sidebar animate__animated animate__fadeInLeftBig animate__fast fixed top-0 left-0 h-screen w-52 bg-orange-500 z-50">
            <Link href="/">
                <Image width="128" height="128" className="mt-5 rounded-full h-32 translate-x-10" src="/logobg.jfif" alt="logo-wok-dorado" />
            </Link>
            <div className="mt-7 flex flex-col text-lg">
                {
                    links.map(link => (
                        <Link key={link.name} className={`${pathname === link.path ? 'active' : ''} sidebar-link flex gap-3 items-center`} href={link.path}>
                            <FontAwesomeIcon icon={link.icon}/>
                            {link.name}
                        </Link>
                    ))
                }
            </div>
        </div>
    </>
    )
}
