import ReadyOrderTable from "@/components/kitchen/ReadyOrderTable"
import { prisma } from "@/src/lib/prisma"
import Image from "next/image"

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
