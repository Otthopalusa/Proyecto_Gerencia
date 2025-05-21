import { LinkType } from "@/Types"
import { faHome, faList } from "@fortawesome/free-solid-svg-icons"

export const linksHome : LinkType[] = [
    {
        name: "Home",
        path: "/",
        icon: faHome
    },
    {
        name: "Menu",
        path: "/order/rice",
        icon: faList
    }
]