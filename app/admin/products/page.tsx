import ProductsPagination from "@/components/products/ProductsPagination"
import ProductsTable from "@/components/products/ProductsTable"
import { prisma } from "@/src/lib/prisma"
import { redirect } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import ProductSearchForm from "@/components/products/ProductSearchForm"

/**
 * Obtiene el número total de productos almacenados en la base de datos.
 *
 * @returns {Promise<number>} Cantidad total de productos.
 */
async function productCount(){
    return await prisma.product.count()
}
/**
 * Obtiene un subconjunto de productos paginados desde la base de datos.
 *
 * @param {number} page - Página actual solicitada.
 * @param {number} pageSize - Número de productos por página.
 * @returns {Promise<any[]>} Lista de productos con su categoría asociada.
 */
async function getProducts(page: number, pageSize: number) {
    const skip = (page - 1) * pageSize
    const products = await prisma.product.findMany({
        take: pageSize,
        skip: skip,
        include : {
            category: true
        }
    })

    return products
}

/**
 * Página de administración de productos.
 *
 * Muestra un listado paginado de los productos registrados en el sistema,
 * con la posibilidad de buscar, crear o editar productos.
 *
 * @component
 * @param {Object} props - Parámetros de búsqueda de la URL.
 * @param {Object} props.searchParams - Objeto con parámetros de búsqueda, incluyendo `page`.
 * @returns {JSX.Element} Página de productos.
 */
export default async function ProductsPage({searchParams} : {searchParams : {page: string}}) {
    const page = +searchParams.page || 1
    const pageSize = 10

    if (page < 0) {
        redirect('/admin/products')
    }
    
    const productsData = getProducts(page, pageSize)
    const totalProductsData = productCount()

    const [products, totalProducts] = await Promise.all([productsData, totalProductsData])
    const totalPages = Math.ceil(totalProducts / pageSize)
    
    if (page > totalPages) {
        redirect('/admin/products')
    }
    
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Administracion de Productos del Wok Dorado</h2>
        </div>

        <div className="relative">
            <Link
            href={`/admin/products/new`}
            className='bg-yellow-600 text-black font-bold p-2 hover:border-b-4 absolute hover:border-r-4 rounded-md duration-300 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:border-b-yellow-700 hover:border-r-yellow-800 '
            >
                Crear Producto
            </Link>
            <ProductSearchForm/>
        </div>

        <ProductsTable products={products}/>
        <ProductsPagination page={page} totalPages={totalPages}/>
    </div>
    )
}
