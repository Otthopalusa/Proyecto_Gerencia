"use server"
import { revalidatePath } from "next/cache"
import { prisma } from "@/src/lib/prisma"
import { OrderIdSchema } from "@/src/schema"
/**
 * Marca una orden como completada actualizando su estado en la base de datos.
 *
 * Valida el ID de la orden recibido desde un formulario usando `OrderIdSchema`.
 * Si la validación es exitosa, actualiza el campo `status` a `true` y establece la fecha
 * de completado con la fecha actual. Luego, invalida la caché de la ruta `/admin/orders`
 * para que se reflejen los cambios en la interfaz administrativa.
 *
 * @param formData - Datos del formulario que contiene el campo `order_id`.
 * @returns void
 *
 * @example
 * ```ts
 * const formData = new FormData();
 * formData.append('order_id', '123abc');
 * await completeOrder(formData);
 * ```
 *
 * @throws Puede lanzar errores si falla la actualización en la base de datos o la invalidación de caché.
 */
export async function completeOrder(formData: FormData) {
    const data = {
        orderId : formData.get('order_id')
    }
    const result = OrderIdSchema.safeParse(data)
    if (result.success){
    try{
        await prisma.order.update({
            where : {
                id : result.data.orderId
            },
            data : {
                status : true,
                orderReadyAt: new Date(Date.now())
            }
        })
        revalidatePath('/admin/orders')
    }catch (error) {
        console.error(error)
    }}
}