import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

export default function Footer() {
    return (
    <footer className="flex sm:flex-row flex-col justify-evenly gap-2 bg-zinc-900 p-6 text-white">
        <div className="footer-section flex flex-col">
            <div className="flex gap-4 items-center">
                <h3 className="font-bold text-xl">ElWokDorado.com</h3>
                <Image width={70} height={70} src="/pet.png" alt="Mascota el wok dorado"/>
            </div>
            <p>!Ya está en Duitama! Una experiencia con sabor oriental...visítanos!</p>
            <p>© 2024 El Wok Dorado. Todos los derechos reservados.</p>
        </div>
        <div className="footer-section flex flex-col gap-2">
            <h3 className="font-bold text-xl">Contacto</h3>
            <a className="contact flex gap-2"><FontAwesomeIcon icon={faEnvelope}/>elwokdoradoduitama@gmail.com</a>
            <a className="contact flex gap-2"><FontAwesomeIcon icon={faPhone}/>+57 314 4908947</a>
            <a className="contact flex gap-2"><FontAwesomeIcon icon={faLocationDot}/>Carrera 16 # 7-105, Duitama, Colombia</a>
        </div>
        <div className="footer-section social-media flex flex-col gap-2">
            <h3 className="font-bold text-xl">Redes Sociales</h3>
            <a target="_blank" href="https://www.facebook.com/elwokdorado" className="facebook flex gap-2"><FontAwesomeIcon icon={faFacebook}/>Facebook</a>
            <a target="_blank" href="https://www.instagram.com/elwokdorado?fbclid=IwZXh0bgNhZW0CMTAAAR1rmBXxCNtoYhUyu4fFVl9cKq30B3xWhL2IaukMa5sxtW9meLAzrV97nGQ_aem_OSFgoJ3YXTPYF4JFemhGww" className="instagram flex gap-2"><FontAwesomeIcon icon={faInstagram}/>Instagram</a>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=573144908947&text=Enlace%3A%0Ahttps%3A%2F%2Ffb.me%2F1ZnupgXsH%0A%0AVi%20esto%20en%20Facebook...&context=ARBHVzMK1LUgbcHUHQS690pqP5Y5Rt589Q_PTR23VDXoemMr6WlmhKLPedTCE9u_29M1JXrg_v-AoRf_3PREC6QmH03mc59dgkQtkAAvCeNAC2O_J3xmIUA4dtATYBXuLqJRtsUFMpF2oL8ECiyEM9YKMw&source&app=facebook&fbclid=IwZXh0bgNhZW0CMTAAAR3Xju60CDgOs-zNAvDg86hfQbnj9Tdn74TAW_F2pl0cOdIq8zDNeyAKTVQ_aem_n3ZAe3nwi0fuYi4ByYBu8g" className="whatsapp flex gap-2"><FontAwesomeIcon icon={faWhatsapp}/>Whatsapp</a>
        </div>
    </footer>
    )
}
