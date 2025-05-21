"use client"
import { useState } from "react"
import Sidebar from "./Sidebar"
import { LinkType } from "@/Types"
import Link from "next/link"
import Image from "next/image"


type NavbarProps = {
    links : LinkType[]
    pathname : string
}

export default function Navbar( {links, pathname} : NavbarProps ) {
    const [showSidebar, setShowSidebar] = useState(false)
    return (
    <>
        <div className="navbar h-32 bg-black shadow-lg flex justify-around items-center z-50">
            
            <Link href="/">
                <Image width={128} height={128} className="animate__animated animate__bounceInDown " src="/logo.jpg" alt="logo-wok-dorado" />
            </Link>
            <div className="nav-links flex gap-20 items-center text-xl text-white uppercase font-light">
                {links.map( link => (
                    <Link key={link.name} className={`${pathname === link.path ? 'active-link' : ''} link relative duration-300 text-base`} href={link.path}>{link.name}</Link>
                ))}
            </div>
            <div onClick={() => setShowSidebar(!showSidebar)} className={`sidebar-btn h-7 w-8 cursor-pointer ${showSidebar ? "active-menu" : ""}`}>
                <div className="bar h-1 bg-white rounded-md"></div>
                <div className="bar h-1 bg-white rounded-md scale-x-75 origin-right"></div>
                <div className="bar h-1 bg-white rounded-md"></div>
            </div>
            {showSidebar && <Sidebar links={links} pathname={pathname}/>}
            
        </div>
    </>
    )
}
