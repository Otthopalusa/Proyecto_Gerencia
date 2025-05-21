import { OrderWithProducts } from "@/src/types"
import { formatCurrency } from "@/src/utils"
import Link from "next/link"

type ReadyOrderTableProps = {
    orders : OrderWithProducts[]
}

export default function ReadyOrderTable({orders} : ReadyOrderTableProps) {
    return (
        <div className="px-4 sm:px-6 lg:px-8 mt-24">
        <div className="mt-8 flow-root ">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8 bg-white p-5 rounded-md">
                    <table className="min-w-full divide-y divide-gray-300">
                        <thead className="">
                            <tr>
                                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-lg font-semibold text-gray-900 sm:pl-0">
                                    N-Orden
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Fecha Pedido
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Fecha Completado
                                </th>
                                <th scope="col" className="px-3 py-3.5 text-left text-lg font-semibold text-gray-900">
                                    Productos vendidos
                                </th>
                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {
                                orders.map(order => (
                                    <tr key={order.id}>
                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                                            {order.id}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {order.date.getDate()}
                                        </td> 
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {order.orderReadyAt?.getDate()}
                                        </td> 
                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                            {order.orderProducts.length}
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                            {order.status? "Completada": "Pendiente"}
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