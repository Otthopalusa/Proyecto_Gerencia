/**
 * Componente Visuals
 *
 * Renderiza una cuadrícula de iconos e imágenes que representan características
 * destacadas del restaurante El Wok Dorado, como ubicación, servicio rápido,
 * ingredientes frescos y ambiente acogedor.
 *
 * @returns JSX.Element que muestra las características visuales del restaurante
 */
export default function Visuals() {
    return (
    <>
        <div className=" grid md:grid-cols-4 grid-cols-2 mt-10 gap-4">
            <div  className="flex flex-col items-center">
                <img src="/img/pin.png" alt="ubicación" />
                <h3 className="mt-2 text-lg font-bold">Duitama, Boyacá</h3>
            </div>
            <div className="flex flex-col items-center">
                <img src="/img/fast.png" alt="ubicación" />
                <h3 className="mt-2 text-lg font-bold">Servicio Rápido</h3>
            </div>
            <div className="flex flex-col items-center">
                <img src="/img/fresh.png" className="h-32" alt="ubicación" />
                <h3 className="mt-2 text-lg font-bold">Ingredientes frescos</h3>
            </div>
            <div className="flex flex-col items-center">
                <img src="/img/hogar.png" alt="ubicación" />
                <h3 className="mt-2 text-lg font-bold">Ambiente acogedor</h3>
            </div>
        </div>
    </>
    )
}
