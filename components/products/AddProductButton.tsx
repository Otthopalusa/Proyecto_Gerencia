"use client"
import { useStore } from "@/src/store"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Product } from "@prisma/client"
import { toast } from "react-toastify"


type AddProductButtonProps = {
    product : Product
    price : number
}

export default function AddProductButton({product, price} : AddProductButtonProps) {
    const addToCart = useStore(state => state.addToCart)
    return (
    <>
        <button
            type="button"
            className="btn-add relative m-3 -mt-2 overflow-hidden bg-lime-600 hover:bg-lime-700 text-white w-11/12 p-3 uppercase font-bold cursor-pointer rounded-md hover:font-black"
            onClick={() => {
                addToCart(product, price)
                if (!product.availability){
                    toast.error(`El producto ${product.name} no esta disponible`)
                }
            }}
        >
            Agregar
            <FontAwesomeIcon
            className="icon-add h-6 absolute top-2/4 -translate-y-2/4 -left-5 duration-300 opacity-0"
            icon={faPlus}
            />
        </button>
    </>
    );
}
