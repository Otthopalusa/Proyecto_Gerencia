import { prisma } from "@/src/lib/prisma"

/**
 * Maneja las solicitudes GET para obtener las órdenes pendientes.
 *
 * Este endpoint consulta la base de datos para recuperar todas las órdenes
 * cuyo estado (`status`) es `false`, e incluye los productos relacionados
 * en cada orden.
 *
 * @returns Un objeto `Response` con la lista de órdenes en formato JSON.
 */
export async function GET(){

    const orders = await prisma.order.findMany({
        where : {
            status : false
        },
        include : {
            orderProducts : {
                include: {
                    product: true
                }
            }
        }
    })
    return Response.json(orders)
}
/**
 * Punto de entrada para solicitudes POST.
 *
 */
export async function POST(){

}

/**
 * Punto de entrada para solicitudes PUT.
 *
 */
export async function PUT(){

}
/**
 * Punto de entrada para solicitudes DELETE.
 *
  */
export async function DELETE(){

}