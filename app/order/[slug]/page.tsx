import ProductCard from "@/components/Ui/ProductCard"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

async function getProducts(category : string){
    const products = await prisma.product.findMany({
        where: { 
            category : {
                slug: category
            }
        }
    })

    return products
}

async function getCategory(slug : string){
    const category = await prisma.category.findMany({
        where: { 
            slug: slug
        }
    })

    return category
}


export default async function OrderPage({params} : { params : {slug : string}}) {
    const products = await getProducts(params.slug)
    const category = await getCategory(params.slug)
    return (
    <>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Restaurante chino menu {category[0]?.name}</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
            
            {products.map(product => (
                <div key={product.id}>
                    <ProductCard product={product}/>
                </div>
            ))}
        </div>
    </>
    )
}
