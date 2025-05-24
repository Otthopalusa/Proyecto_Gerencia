"use client"

import { createProduct } from "@/actions/create-product-action";
import { ProductSchema } from "@/src/schema";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { faPen } from "@fortawesome/free-solid-svg-icons";

export default  function AddProductForm({children} : {children : React.ReactNode}) {

    const router = useRouter()
    const handleSubmit = async (formData: FormData) => {
        const data = {
            name: formData.get('name'),
            description: formData.get('description'),
            fullPrice: formData.get('fullPrice'),
            halfPrice: formData.get('halfPrice'),
            categoryId: formData.get('categoryId'),
            image: formData.get('image'),
            availability: true
        }

        const result = ProductSchema.safeParse(data)
        
        if (!result.success){
            console.log(result.error.issues)
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }

        const response = await createProduct(data)
        if (response?.errors){
            response.errors.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }

        toast.success("Producto creado correctamente")
        router.push("/admin/products")
    }

    return (
    <>
        <div className="bg-white mt-24 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
            <form action={handleSubmit} className="flex flex-col gap-4">
                {children}
                <input
                type="submit"
                className="css-button-arrow--black w-full text-center"
                value="Crear Producto"
                />
            </form>
            <FontAwesomeIcon icon={faPen} className="absolute text-white -top-2 left-full arrow-btn duration-300 opacity-0"/>
        </div>
    </>
    );
}