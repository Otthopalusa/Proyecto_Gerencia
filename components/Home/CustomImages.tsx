import Image from "next/image"
type CustomImagesProps = {
    imgSrc: string
    pt: string
}

export default function CustomImages({imgSrc, pt} : CustomImagesProps) {
    return (
    <>
        <div className="custom-image h-0 w-full object-cover" style={{paddingTop: pt}}>
            <Image quality={70} width={500} height={500} src={imgSrc} alt="" className="rounded-sm absolute top-0 left-0 w-full h-full z-0"/>
        </div>
    </>
    )
}
