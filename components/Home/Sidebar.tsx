import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'animate.css';
import Link from "next/link";
import Image from "next/image";

type SidebarProps = {
    links: {
        name: string;
        path: string;
        icon: IconDefinition;
    }[]
    pathname: string
}

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
