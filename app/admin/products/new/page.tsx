import AddProductForm from "@/components/products/AddProductForm"
import ProductForm from "@/components/products/ProductForm"
import Image from "next/image"

/**
 * Página de creación de nuevos productos.
 *
 * Esta vista permite al administrador registrar un nuevo producto
 * en el sistema del restaurante. Se compone de un formulario general
 * (`ProductForm`) envuelto dentro de `AddProductForm`, que maneja
 * la lógica adicional para agregar un producto.
 *
 * @component
 * @returns {JSX.Element} Componente de la página para registrar un nuevo producto.
 */
export default function CreateProductsPage() {
    return (
    <>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Nuevo Producto</h2>
        </div>
        <AddProductForm>
            <ProductForm/>
        </AddProductForm>
    </>
    )
}
