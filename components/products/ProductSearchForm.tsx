"use client"
import { SearchSchema } from "@/src/schema"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { toast } from "react-toastify"
import { useRouter } from "next/navigation"

export default function ProductSearchForm() {
    const router = useRouter()
    const handleSearchForm = (formData: FormData) =>{
        const data = {
            search: formData.get('search')
        }
        const result = SearchSchema.safeParse(data)
        if (!result.success){
            result.error.issues.forEach(issue => {
                toast.error(issue.message)
            })
            return
        }
        router.push(`/admin/products/search?search=${result.data.search}`)
    }

    return (
    <form 
    action={handleSearchForm}
    className="absolute right-0 max-w-xs w-full"
    >
        <div className="search-box h-12 max-w-72 m-auto relative shadow-lg rounded-full">
            <input 
            type="text" 
            placeholder="Busca Producto"
            name="search"
            className="absolute h-full w-full rounded-full bg-white outline-none border-none pl-5 text-lg" />
            <button type='submit' className="icon absolute right-0 top-0 bg-yellow-600 h-full w-10 rounded-r-full text-center text-lg">
                <FontAwesomeIcon icon={faMagnifyingGlass}/>
            </button>
        </div>
    </form>
    )
}
