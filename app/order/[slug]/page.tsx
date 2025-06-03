import ProductCard from "@/components/Ui/ProductCard"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

/**
 * Obtiene los productos asociados a una categoría específica según su slug.
 *
 * @param {string} category - Slug de la categoría.
 * @returns {Promise<any[]>} Lista de productos asociados a la categoría.
 */
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
/**
 * Obtiene la información de una categoría específica por su slug.
 *
 * @param {string} slug - Slug de la categoría.
 * @returns {Promise<any[]>} Información de la categoría correspondiente.
 */
async function getCategory(slug : string){
    const category = await prisma.category.findMany({
        where: { 
            slug: slug
        }
    })

    return category
}

/**
 * Página de pedido por categoría.
 *
 * Esta vista muestra los productos disponibles de una categoría específica,
 * basándose en el slug recibido por la URL. Cada producto es representado por
 * una tarjeta (`ProductCard`). Además, se presenta el nombre de la categoría
 * en el encabezado.
 *
 * @component
 * @param {Object} props - Props del componente.
 * @param {Object} props.params - Parámetros de ruta dinámica.
 * @param {string} props.params.slug - Slug de la categoría seleccionada.
 * @returns {JSX.Element} Página renderizada con los productos de la categoría.
 */
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
