import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import 'animate.css'


export default function HeroSection() {
    return (
    <>
        <div className="mx-5 flex flex-col md:flex-row mb-10 gap-5">
            <div className="flex-1">
                <img className="animate__animated animate__fadeInLeft" src="/img/image_wok_dorado.jpg" alt="" />
            </div>
            <div className="flex-1 flex flex-col gap-4">
                <h1 className=" font-bold text-4xl">Bienvenido a El <span className="text-yellow-600">Wok</span> Dorado</h1>
                <h2 className=" phrase relative text-xl block my-5 font-semibold"><FontAwesomeIcon icon={faQuoteLeft}/>Disfruta de auténticos sabores orientales en un ambiente acogedor<FontAwesomeIcon icon={faQuoteRight}/></h2>
                <p className=" text-md">En El Wok Dorado, ofrecemos una experiencia culinaria única con auténticos sabores orientales en un ambiente acogedor. Ven y descubre nuestros platos hechos con pasión.</p>
                <div className="flex my-2">
                    <Link href={"/order/rice"}>
                        <button type="button" className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-2 focus:outline-none focus:ring-yellow-300 focus:font-bold font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                        Realizar pedido
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}
