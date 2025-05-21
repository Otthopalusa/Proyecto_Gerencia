"use client"
import { Product } from "@prisma/client"
import CustomImages from "../Home/CustomImages"
import Image from "next/image"
import { formatCurrency, getImagePath } from "@/src/utils"
import "animate.css"
import AddProductButton from "../products/AddProductButton"
import { useState } from "react"

type ProductCardProps = {
    product : Product
}

export default function ProductCard({product} : ProductCardProps) {
    const [isChecked, setIsChecked] = useState({
        fullPrice: false,
        halfPrice: false,
    });
    
    const handleCheckedFullPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked({ ...isChecked, fullPrice: event.target.checked });
    };
    
    const handleCheckedHalfPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked({ ...isChecked, halfPrice: event.target.checked });
    };

    const imagePath = getImagePath(product.image)
    return (
    <>
        <div className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl duration-500 card">
            <CustomImages imgSrc={imagePath} pt="90%"/>
            <div className="info-product p-4">
                {product.availability ? (
                    <Image className=" rounded-full bg-white shadow-md -mt-14 border-2 border-white" width={60} height={60} src="/icons/check.png" alt="available"/>
                ):(
                    <Image className=" rounded-full bg-white shadow-md -mt-14 border-4 border-white" width={60} height={60} src="/icons/no-check.png" alt="available"/>
                )}
                <h3 className="text-2xl font-black">{product.name}</h3>
                <p className="description h-0 overflow-hidden duration-300">{product.description}</p>
                <div className="flex justify-around">
                    <div>
                        <div className="flex gap-2">
                            <input 
                            type="checkbox" 
                            id={`check-fullprice-${product.id}`}
                            checked={isChecked.fullPrice}
                            onChange={handleCheckedFullPrice}
                            />
                            <label htmlFor={`check-fullprice-${product.id}`} className="custom-checkbox text-lg font-black text-yellow-600 cursor-pointer">Completo</label>
                        </div>
                        <h4 className="text-lg font-bold flex gap-1"><span className="text-yellow-600">$</span>{formatCurrency(product.fullPrice).slice(1)}</h4>
                    </div>
                    {product.halfPrice !== 0 &&
                        <div>
                            <div className="flex gap-2">
                                <input 
                                type="checkbox" 
                                id={`check-halfPrice-${product.id}`}
                                checked={isChecked.halfPrice}
                                onChange={handleCheckedHalfPrice}
                                />
                                <label htmlFor={`check-halfPrice-${product.id}`} className="custom-checkbox text-lg font-black cursor-pointer">Medio</label>
                            </div>
                            <h4 className="text-lg font-bold flex gap-1"><span className="text-yellow-600">$</span>{formatCurrency(product.halfPrice).slice(1)}</h4>
                        </div>
                    }
                </div>
            </div>
            <AddProductButton product={product} price={isChecked.fullPrice && isChecked.halfPrice ? product.fullPrice+product.halfPrice : isChecked.halfPrice ? product.halfPrice : product.fullPrice}/>
        </div>
    </>
    )
}
