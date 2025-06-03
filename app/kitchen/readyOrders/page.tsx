import ReadyOrderTable from "@/components/kitchen/ReadyOrderTable"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

/**
 * Obtiene todas las órdenes completadas de la base de datos.
 *
 * Las órdenes con `status: true` son consideradas listas para entregar.
 * Incluye los productos asociados a cada orden.
 *
 * @returns Lista de órdenes completadas con sus productos.
 */
async function getReadyOrders() {
    const orders = await prisma.order.findMany({
        where : {
            status : true
        },
        include : {
            orderProducts : {
                include: {
                    product: true
                }
            }
        }
    })
    return orders
}
/**
 * Página para visualizar todas las órdenes completadas en la cocina del restaurante.
 *
 * Esta vista se usa para mostrar las órdenes listas para ser entregadas a los clientes.
 *
 * @returns Componente que renderiza el título y la tabla de órdenes completas.
 */
export default async function OrderReadyPage() {
    const orders = await getReadyOrders()
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Ordenes Completadas del Wok Dorado</h2>
        </div>
        <ReadyOrderTable orders={orders}/>
    </div>
    )
}
