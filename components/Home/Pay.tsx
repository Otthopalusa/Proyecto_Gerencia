export default function Pay() {
    return (
    <>
        <div className="mx-8 my-10">
            <h2 className="text-2xl font-bold">Medios de pago digitales</h2>
            <div className="flex flex-col md:flex-row justify-evenly gap-28 mt-28">
                <div className="flex-1 relative">
                    <div className="pt-28 w-full bg-yellow-600 shadow-xl rounded-xl flex flex-col items-center pb-10 gap-2">
                        <div className="flex gap-3">
                            <h3 className=" font-bold underline">Teléfono: </h3>
                            <p className="font-base">
                                3182998438
                            </p>
                        </div>
                        <h3 className=" text-lg">Compra aquí con el código <span className="font-bold text-white">QR</span></h3>
                        <img className="rounded-md" src="/img/qr_nequi.png" alt="" />
                    </div>
                    <img className="h-44 absolute -top-1/4 left-2/4 -translate-x-2/4 rounded-xl" src="/img/nequi.png" alt="logo-nequi" />
                </div>
                <div className="flex-1 relative">
                    <div className="pt-28 w-full bg-black rounded-xl shadow-2xl flex flex-col items-center pb-10 gap-2">
                        <div className="flex gap-3">
                            <h3 className=" text-white underline">Teléfono: </h3>
                            <p className="font-light text-white">
                                3182998438
                            </p>
                        </div>
                        <h3 className="text-white text-lg font-light">Compra aquí con el código <span className="font-bold text-yellow-500">QR</span></h3>
                        <img className="rounded-md" src="/img/qr_daviplata.png" alt="" />
                    </div>
                    <img className="h-44 absolute -top-1/4 left-2/4 -translate-x-2/4 rounded-xl" src="/img/daviplata.png" alt="" />
                </div>
            </div>
        </div>
    </>
    )
}
