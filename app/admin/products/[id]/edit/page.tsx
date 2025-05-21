import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"
import Image from "next/image"
import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/products/GoBackButton"

async function getProductById(id : number){
    const product = await prisma.product.findUnique({
        where:{
            id
        }
    })
    if (!product){
        notFound()
    }
    return product
}

export default async function EditProductPage({params} : {params: {id:string}}) {
    const product = await getProductById(parseInt(params.id))
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly ">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Editar Producto {product.name}</h2>
        </div>
        <GoBackButton/>
        <EditProductForm>
            <ProductForm product={product}/>
        </EditProductForm>
    </div>
    )
}
