"use client"
import { Category } from "@prisma/client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

type CategoryIconProps = {
    category : Category
}

export default function CategoryIcon({category} : CategoryIconProps) {
    const params = useParams<{slug : string}>()
    console.log(params)
    return (
    <>
        <Link href={`/order/${category.slug}`} className={`${category.slug === params.slug ? 'bg-yellow-600': ''} flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b font-bold pl-3 text-xl hover:bg-yellow-600 relative link-category`}>
            <Image 
            width={50}
            height={50}
            src={`/icons/${category.slug}.png`} 
            alt="Icono Categoria" />
            {category.name}
        </Link>
    </>
    )
}
