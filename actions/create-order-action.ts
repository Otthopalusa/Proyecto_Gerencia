"use server"

import { prisma } from "@/src/lib/prisma"
import { OrderSchema } from "@/src/schema"


/**
 * Crea una nueva orden en la base de datos a partir de los datos proporcionados.
 *
 * Esta función valida los datos recibidos usando el esquema `OrderSchema` y, si son válidos,
 * crea la orden con sus productos asociados en la base de datos mediante Prisma.
 *
 * @param data - Datos de la orden a crear, con estructura desconocida inicialmente.
 * @returns Un objeto con errores de validación si los datos son inválidos, o undefined si la creación es exitosa.
 *
 * @example
 * ```ts
 * const orderData = {
 *   name: "Juan Pérez",
 *   total: 45000,
 *   order: [
 *     { id: "prod123", quantity: 2, subtotal: 30000 },
 *     { id: "prod456", quantity: 1, subtotal: 15000 }
 *   ]
 * }
 *
 * const result = await createOrder(orderData);
 * if (result?.errors) {
 *   // manejar errores de validación
 * }
 * ```
 *
 * @throws Puede lanzar errores en caso de fallo en la conexión con la base de datos o errores de Prisma.
 */
export async function createOrder( data : unknown ) {
    const result = OrderSchema.safeParse(data)

    if(!result.success){
        return {
            errors: result.error.issues
        }
    }

    try {
        await prisma.order.create({
            data: {
                name: result.data.name,
                total: result.data.total,
                orderProducts: {
                    create: result.data.order.map(product => ({
                        productId: product.id,
                        quantity: product.quantity,
                        subtotal: product.subtotal
                    }))
                }
            }
        })
    } catch (error) {
        console.log(error)
    }
}