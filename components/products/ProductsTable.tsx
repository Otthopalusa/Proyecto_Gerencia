import { ProductType } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import Link from "next/link"

type ProductsTableProps = {
    products : ProductType[]
}

export default function ProductsTable({products} : ProductsTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mt-8 flow-root ">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 rounded-md">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead>
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0">
                                    Producto
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Precio Completo
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Precio Medio
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Categoría
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    <span className="sr-only">Acciones</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                products.map(product => (
                                    <tr key={product.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {product.name}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {formatCurrency(product.fullPrice)}
                                        </td> 
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.halfPrice !== 0 ?formatCurrency(product.halfPrice): 'No disponible'}
                                        </td> 
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {product.category.name}
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            <Link href={`/admin/products/${product.id}/edit`} className="bg-blue-400 p-1 font-semibold text-white rounded hover:bg-blue-500">Editar <span className="sr-only">{product.name}</span></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}
