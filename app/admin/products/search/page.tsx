import ProductSearchForm from "@/components/products/ProductSearchForm"
import ProductsTable from "@/components/products/ProductsTable"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

async function searchProducts(searchTerm: string){
    const products = await prisma.product.findMany({
        where:{
            OR: [
                {
                    name:{
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                },
                {
                    category:{
                        name:{
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                },
                {
                    description:{
                        contains: searchTerm,
                        mode: 'insensitive'
                    }
                }
            ]
        },
        include: {
            category: true
        }
    })
    return products
}

export default async function searchPage({searchParams} : {searchParams: {search: string}}) {
    const products = await searchProducts(searchParams.search)
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Resultados de la Busqueda de {searchParams.search}</h2>
        </div>
        <div className="relative">
            <ProductSearchForm/>
        </div>
        {
            products.length === 0 ?
            <p className="mt-20 text-center text-lg font-semibold text-stone-700">No hay resultados en la búsqueda</p>:
            <ProductsTable products={products}/>
        }
    </div>
    )
}
