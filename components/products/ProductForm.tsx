import { prisma } from "@/src/lib/prisma"
import ImageUpload from "./ImageUpload"
import { Product } from "@prisma/client"

async function getCategories(){
    return await prisma.category.findMany()
}

type ProductFormProps = {
    product?: Product
}

export default async function ProductForm({product} : ProductFormProps) {
    const categories = await getCategories()
    return (
    <>
        <div className="relative w-full h-10 mb-5">
            <input
                type="text"
                name="name"
                defaultValue={product?.name}
                required={true}
                className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"
            />
            <label className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-white label__input pointer-events-none">
                Nombre
            </label>
        </div>
        <div className="relative w-full h-10 mb-5">
            <input
                type="text"
                name="description"
                defaultValue={product?.description}
                required={true}
                className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"
            />
            <label className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-white label__input pointer-events-none">
                Descripción
            </label>
        </div>
        <div className="relative w-full h-10 mb-5">
            <input
                type="number"
                name="fullPrice"
                defaultValue={product?.fullPrice}
                required={true}
                className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"
            />
            <label className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-white label__input pointer-events-none">
                Precio Completo
            </label>
        </div>
        <div className="relative w-full h-10 mb-5">
            <input
                type="number"
                name="halfPrice"
                defaultValue={product?.halfPrice}
                required={true}
                className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"
            />
            <label className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-white label__input pointer-events-none">
                Precio Medio
            </label>
        </div>
        <div className="relative w-full h-10 mb-5">
            <select
                name="categoryId"
                id="categoryId"
                value={product?.categoryId}
                required={true}
                className="my-2 p-3 outline-none text-xl font-bold text-neutral-800 rounded-md absolute top-0 left-0 w-full border-2 border-neutral-800 bg-transparent text__input"
            >
                <option value="" disabled selected hidden></option>
                {categories.map((category) => (
                <option key={category.id} value={category.id}>
                    {category.name}
                </option>
                ))}
            </select>
            <label htmlFor="categoryId" className=" absolute mt-5 ml-4 text-lg font-bold text-neutral-800 inline-block duration-500 bg-white label__input pointer-events-none">
                Categoría
            </label>
        </div>
        <ImageUpload image={product?.image} />
    </>
    );
}
