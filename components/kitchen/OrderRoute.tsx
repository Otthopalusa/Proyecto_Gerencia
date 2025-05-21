"use client"
import Link from "next/link"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { usePathname } from "next/navigation"

type OrderRouteProps = {
    link : {
        url : string
        text : string
        blank : boolean
        icon : IconDefinition
    }
}

export default function OrderRoute({link} : OrderRouteProps) {
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