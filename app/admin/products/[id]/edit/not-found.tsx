import Image from "next/image"
import Link from "next/link"

/**
 * Componente que muestra una pantalla de "Producto no encontrado" para la sección de administración.
 *
 * Renderiza un mensaje visual con un ícono y un botón que redirige a la lista de productos.
 *
 * @returns JSX.Element que representa la vista de producto no encontrado.
 */
export default function NotFound() {
    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Producto no encontrado</h2>
        </div>
        <div className="flex justify-center">
            <Link
                href={`/admin/products`}
                className='bg-yellow-600 text-black font-bold p-2 hover:border-b-4 absolute hover:border-r-4 rounded-md duration-300 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:border-b-yellow-700 hover:border-r-yellow-800 mx-auto'
            >
                Ir a Productos
            </Link>
        </div>
    </div>
    )
}
