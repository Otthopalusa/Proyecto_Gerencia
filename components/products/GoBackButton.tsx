"use client"

import { useRouter } from "next/navigation"
export default function GoBackButton() {
    const router = useRouter()
    return (
    <div className="relative">
            <button
                onClick={() => router.back()}
                className='bg-yellow-600 text-black font-bold p-2 hover:border-b-4 absolute hover:border-r-4 rounded-md duration-300 hover:shadow-xl hover:-translate-x-1 hover:-translate-y-1 hover:border-b-yellow-700 hover:border-r-yellow-800'
            >
                Volver
            </button>
    </div>
    )
}
