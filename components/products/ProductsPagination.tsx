import Link from "next/link";

export default function ProductsPagination({page, totalPages} : {page: number, totalPages: number}) {
    const pages = Array.from({length: totalPages}, (_, i) => i + 1)

    return (
    <nav className="flex justify-center py-10 items-center gap-1">
        <Link className=" border-2 text-2xl bg-stone-800 p-2 rounded-l-xl font-black hover:scale-105 duration-200 text-yellow-600" href={`/admin/products?page=${page-1}`}>&laquo;</Link>
        {
            pages.map(currentPage => (
                <Link 
                key={currentPage}
                href={`/admin/products?page=${currentPage}`}
                className={`${page === currentPage && 'font-black text-yellow-600 bg-stone-800'} ring-inset ring-gray-300 bg-white px-3 py-2 font-bold border border-stone-600 focus:outline-offset-0`}
                >
                    {currentPage}
                </Link>
            ))
        }
        {
            totalPages!==page &&
            <Link className=" border-2 text-2xl bg-stone-800 p-2 rounded-r-xl font-black hover:scale-105 duration-200 text-yellow-600" href={`/admin/products?page=${page+1}`}>&raquo;</Link>
        }
    </nav>
    )
}
