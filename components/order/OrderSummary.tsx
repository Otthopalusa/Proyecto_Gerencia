"use client"
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { formatCurrency } from "@/src/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { createOrder } from "@/actions/create-order-action";

import { toast } from "react-toastify";
import { useMemo } from "react";

export default function OrderSummary() {
    const {order, clearOrder} = useStore()
    const total = useMemo(() => order.reduce((acc, item) => acc + item.subtotal, 0), [order])

    const handleCreateOrder = async (formData : FormData) => {
        const data = {
            name: formData.get('name'),
            total,
            order
        }

        const response = await createOrder(data)
        if (response?.errors) {
            response.errors.forEach((issue) => {
                toast.error(issue.message)
            })
        }

        toast.success("Pedido realizado correctamente")
        clearOrder()
    }

    return (
    <>
        <aside className="md:h-screen md:overflow-y-scroll md:w-64 lg:w-96 p-5">
            <h1 className="text-4xl text-center font-black">Mi Pedido</h1>
            {order.length === 0 ? <p className="text-center text-neutral-600 text-lg mt-5 font-semibold">El pedido está vacío</p>:(
                <div className="mt-5">
                    {order.map(item => (
                        <ProductDetails key={item.id} item={item} />
                    ))}
                    <h2 className="clip-path-custom font-black text-xl mt-3 p-3 bg-black text-white shadow-lg rounded-sm">Total a pagar:{' '}
                        <span className="text-lg font-semibold text-yellow-600">
                            {formatCurrency(total)}
                        </span>
                    </h2>
                    <form 
                    className="w-full mt-5 space-y-5 relative overflow-hidden"
                    action={handleCreateOrder}>
                        <div className="relative w-full h-10 mb-5">
                            <input type="text" name="name" required={true} className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"/>
                            <label  className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-gray-200 label__input pointer-events-none">
                                Mesa Pedido
                            </label>
                        </div>
                        <input
                        type="submit"
                        className="css-button-arrow--black w-full text-center"
                        value="Confirmar Pedido"
                        />
                        <FontAwesomeIcon icon={faArrowRight} className="absolute text-white -top-2 left-full arrow-btn duration-300 opacity-0"/>
                    </form>
                </div>
            )}
        </aside>
    </>
    )
}
