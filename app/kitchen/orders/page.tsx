"use client"
import OrderCard from "@/components/order/OrderCard"
import { OrderWithProducts } from "@/src/types"
import Image from "next/image"
import useSWR from "swr"

export default function OrderPendingPage() {
    const url = '/kitchen/orders/api'
    const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
    const {data, error, isLoading} = useSWR<OrderWithProducts[]>(url, fetcher, {
        refreshInterval: 60000
    })

    if (isLoading) return (
        <div className="spinner">
            <div className="cube1"></div>
            <div className="cube2"></div>
        </div>
    )

    if (data) return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Ordenes Pendientes del Wok Dorado</h2>
        </div>
        {
            data.length ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                    {
                        data.map(order => (
                            <OrderCard key={order.id} order={order}/>
                        ))
                    }
                </div>
            ) : (<p className="text-center">No hay Ordenes Pendientes</p>)
        }
    </div>
    )
}
