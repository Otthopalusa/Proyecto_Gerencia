import { OrderItem } from "@/src/types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"
import { formatCurrency } from "@/src/utils"
import { useStore } from "@/src/store"
import 'animate.css';
import { useState } from "react"

type ProductDetailsProps = {
    item : OrderItem
}

export default function ProductDetails({item} : ProductDetailsProps) {
    const {increaseQuantity, decreaseQuantity, deleteItem} = useStore()
    const [deleteIt, setDeleteIt] = useState(false)
    return (
    <>
        <div className={`shadow space-y-1 p-4 bg-white  border-t border-gray-200 animate__animated ${deleteIt ? 'animate__bounceOutRight': 'animate__fadeInRight'} animate__faster`}>
            <div className="space-y-4">
                <div className="flex justify-between items-start">
                    <p className="text-xl font-bold">{item.name} </p>

                    <button
                        type="button"
                    onClick={() => {
                        deleteItem(item.id)
                        setDeleteIt(!deleteIt)
                    }}
                    >
                        <FontAwesomeIcon icon={faTrash} className="text-red-600 h-8 w-8 hover:scale-105 duration-300"/>
                    </button>
                </div>
        <p className="text-2xl text-yellow-600 font-black">
            {formatCurrency(item.price)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
            <button
                type="button"
                onClick={() => {decreaseQuantity(item.id, item.price)}}
            >
                <FontAwesomeIcon icon={faMinus} className="h-6 w-6"/>
            </button>

            <p className="text-lg font-black ">
                {item.quantity}
            </p>

            <button
                type="button"
                onClick={() => {increaseQuantity(item.id, item.price)}}
            >
                <FontAwesomeIcon icon={faPlus} className="h-6 w-6"/>
            </button>
        </div>
        <p className="text-xl font-black text-gray-700">
            Subtotal: {formatCurrency(item.subtotal)}
            <span className="font-normal"> 

            </span>
        </p>
    </div>
</div>
    </>
    )
}
