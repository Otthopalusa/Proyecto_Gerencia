"use server"

import { prisma } from "@/src/lib/prisma"
import { ProductSchema } from "@/src/schema"
/**
 * Crea un nuevo producto en la base de datos después de validar los datos de entrada.
 *
 * Valida la estructura y contenido de `data` usando el esquema `ProductSchema`.
 * Si la validación falla, retorna un objeto con los errores correspondientes.
 * En caso contrario, crea el producto en la base de datos con Prisma.
 *
 * @param data - Datos del producto a crear, con tipo desconocido inicialmente.
 * @returns Un objeto con errores de validación si los datos no son válidos, o `undefined` si la creación es exitosa.
 *
 * @example
 * ```ts
 * const productData = {
 *   name: "Arroz con pollo",
 *   description: "Plato tradicional con arroz y pollo",
 *   fullPrice: 25000,
 *   halfPrice: 15000,
 *   availability: true,
 *   image: "https://example.com/image.jpg",
 *   categoryId: "cat123"
 * }
 *
 * const result = await createProduct(productData);
 * if (result?.errors) {
 *   // manejar errores
 * }
 * ```
 *
 * @throws Puede lanzar errores si la conexión a la base de datos falla o si Prisma genera excepciones.
 */
export async function createProduct(data: unknown) {
    const result = ProductSchema.safeParse(data)

    if(!result.success) {
        return {
            errors: result.error.issues
        }
    }

    await prisma.product.create({
        data: result.data
    })
}