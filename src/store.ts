import { create } from "zustand";
import { OrderItem } from "./types";
import { Product } from "@prisma/client";



interface Store {
    order : OrderItem[]
    addToCart : (product: Product, price: number) => void
    increaseQuantity : (id : Product['id'], price : number) => void
    decreaseQuantity : (id : Product['id'], price : number) => void
    deleteItem : (id : Product['id']) => void
    clearOrder : () => void
}

export const useStore = create<Store>((set, get) => ({
    order: [],
    addToCart: (product, price) => {
        let order : OrderItem[] = get().order
        if ( product.availability ){
            order = []
            if ( get().order.find(item => item.id === product.id) ){
                order = get().order.map(item => item.id === product.id ? {
                    ...item,
                    quantity: item.quantity+1,
                    subtotal: item.subtotal + price
                }: item)
            }else{
                order = [...get().order,{
                    id : product.id,
                    name: product.name,
                    price: price,
                    quantity : 1,
                    subtotal : 1*price
                    }
                ]
            }
        }
        set(() => ({
            order
        }))
    },
    increaseQuantity: (id, price) => {
        let order : OrderItem[] = []
        order = get().order.map(item => item.id === id ? {
            ...item,
            quantity : item.quantity + 1,
            subtotal : item.subtotal + price
        }: item)
        set(() => ({
            order
        }))
    },
    decreaseQuantity: (id, price) => {
        let order : OrderItem[] = []
        order = get().order.map(item => item.id === id && item.quantity !== 1 ? {
            ...item,
            quantity : item.quantity - 1,
            subtotal : item.subtotal - price
        }: item)
        set(() => ({
            order
        }))
    },
    deleteItem : (id) => {
        let order : OrderItem[] = []
        order = get().order.filter(item => item.id !== id && item.id)
        set(() => ({
            order
        }))
    },
    clearOrder : () => {
        set(() => ({
            order: []
        }))
    }
}))