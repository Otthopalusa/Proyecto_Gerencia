/**
 * Componente `CustomImages`
 *
 * Renderiza una imagen responsiva con proporción de aspecto personalizada utilizando el componente `Image` de Next.js.
 * Este componente es útil para mostrar imágenes en galerías o layouts en cuadrícula, respetando proporciones uniformes.
 *
 * @param {CustomImagesProps} props - Propiedades del componente
 * @param {string} props.imgSrc - Ruta de la imagen que se va a renderizar
 * @param {string} props.pt - Valor del `padding-top` para mantener la proporción de aspecto (por ejemplo: "75%")
 *
 * @returns {JSX.Element} Imagen optimizada con estilo personalizado
 *
 * @example
 * <CustomImages imgSrc="/img/image_1.png" pt="85%" />
 */
import Image from "next/image"
type CustomImagesProps = {
    imgSrc: string
    pt: string
}

export default function CustomImages({imgSrc, pt} : CustomImagesProps) {
    return (
    <>
        <div className="custom-image h-0 w-full object-cover" style={{paddingTop: pt}}>
            <Image quality={70} width={500} height={500} src={imgSrc} alt="" className="rounded-sm absolute top-0 left-0 w-full h-full"/>
        </div>
    </>
    )
}
