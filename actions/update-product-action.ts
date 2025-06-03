"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"

/**
 * Actualiza un producto existente en la base de datos tras validar los datos proporcionados.
 *
 * Valida la estructura y contenido del parámetro `data` utilizando `ProductSchema`.
 * Si la validación falla, retorna un objeto con los errores correspondientes.
 * En caso exitoso, actualiza el producto identificado por `id` con los nuevos datos.
 *
 * @param data - Datos actualizados del producto con tipo desconocido inicialmente.
 * @param id - Identificador numérico del producto a actualizar.
 * @returns Un objeto con errores de validación si los datos no son válidos, o `undefined` si la actualización es exitosa.
 *
 * @example
 * ```ts
 * const updatedData = {
 *   name: "Arroz con pollo especial",
 *   description: "Versión mejorada con más ingredientes",
 *   fullPrice: 27000,
 *   halfPrice: 16000,
 *   availability: true,
 *   image: "https://example.com/image-new.jpg",
 *   categoryId: "cat123"
 * }
 *
 * const result = await updateProduct(updatedData, 1);
 * if (result?.errors) {
 *   // manejar errores
 * }
 * ```
 *
 * @throws Puede lanzar errores si falla la conexión a la base de datos o Prisma genera excepciones.
 */
export async function updateProduct(data : unknown, id : number) {
    const result = ProductSchema.safeParse(data)

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.product.update({
        where: {
            id
        },
        data: result.data
    })
}