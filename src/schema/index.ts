import { z } from 'zod'

export const OrderSchema = z.object({
    name: z.string().min(1, "Tu nombre es obligatorio"),
    total: z.number().min(1, "Hay errores en la orden"),
    order: z.array(z.object({
        id: z.number(),
        name: z.string(),
        price: z.number(),
        quantity: z.number(),
        subtotal: z.number()
    }))
})

export const OrderIdSchema = z.object({
    orderId: z.string().transform((value) => parseInt(value)).refine(value => value > 0, {message: "Hay errores"})
})

export const SearchSchema = z.object({
    search: z.string().trim().min(1, {message: 'La busqueda no puede ir vacía'})
})

export const ProductSchema = z.object({
    name: z.string().trim().min(1, {message: 'El nombre del producto es obligatorio'}),
    description: z.string().trim().min(1, {message: 'La descripción del producto es obligatoria'}),
    fullPrice: z.string().trim().transform((value) => parseFloat(value)).refine((value) => value > 0, {message: 'Precio no válido ingresa uno nuevo'}),
    halfPrice: z.string().trim().transform((value) => parseFloat(value)).refine((value) => value >= 0, {message: 'Precio no válido ingresa uno nuevo'}),
    categoryId: z.string().trim().transform(value => parseInt(value)).refine(value => value > 0, {message: 'La categoría es obligatoria'}),
    image: z.string().trim().min(1, {message: 'La imagen es obligatoria'}),
    availability: z.boolean()
})