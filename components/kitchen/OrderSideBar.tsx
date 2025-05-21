

import { faArrowDownShortWide, faBowlRice} from "@fortawesome/free-solid-svg-icons"
import OrderRoute from "./OrderRoute"

const orderNavigation = [
    {url: '/kitchen/orders', text: 'Ordenes Pendientes', blank: false, icon: faArrowDownShortWide},
    {url: '/kitchen/readyOrders', text: 'Ordenes Listas', blank: false, icon: faBowlRice},
]

export default function OrderSideBar() {

    return (
        <>

            <div className="space-y-3">
                <p className="pt-5 uppercase font-bold text-lg text-gray-200 text-center">Navegación</p>
                <nav className="flex flex-col">
                    {
                        orderNavigation.map(link => (
                            <OrderRoute
                            key={link.url}
                            link={link}
                            />
                        ))
                    }
                </nav>
            </div>
        </>

    )
}
