import { PrismaClient } from "@prisma/client";
import { products } from "./data/products";
import { categories } from "./data/categories";

const prisma = new PrismaClient();

async function main() {
    try {
        // Primero insertar categorías
        await prisma.category.createMany({
            data: categories
        })
        // Luego insertar productos
        await prisma.product.createMany({
            data: products
        })
    }catch (err) {
        console.error(err)
    }
}

main()
    .then( async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })