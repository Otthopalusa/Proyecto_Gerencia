import CardStatistics from "@/components/sales/CardStatistics";
import { prisma } from "@/src/lib/prisma";
import Image from "next/image"
import { faBagShopping, faBowlFood, faBox, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { formatCurrency } from "@/src/utils";
import SimpleBarCharts from "@/components/sales/SimpleBarCharts";
import SimpleCircleChart from "@/components/sales/SimpleCircleChart";
import SimpleLineChart from "@/components/sales/SimpleLineChart";
import SimpleRadarChart from "@/components/sales/SimpleRadarChart";

async function getOrders(){
    return prisma.order.findMany(
        {
            include: {
                orderProducts: {
                    include: {
                        product: {
                            include: {
                                category: true
                            }
                        }
                    }
                }
            }
        }
    )
}

async function getTotalProductsByProductName() {
    const orders = await getOrders();

    const productTotals: { [key: string]: { name: string; value: number } } = {};

    orders.forEach(order => {
        order.orderProducts.forEach(orderProduct => {
        const productName = orderProduct.product.name;
        const quantity = orderProduct.quantity;

        if (!productTotals[productName]) {
            productTotals[productName] = { name:productName, value: 0 };
        }

        productTotals[productName].value += quantity;
        });
    });

    return productTotals;
}

async function getProductCountByCategory() {
    const orders = await getOrders();

    const categoryCounts: { [key: string]: number } = {};

    orders.forEach(order => {
        order.orderProducts.forEach(orderProduct => {
            const category = orderProduct.product.category.name;
            if (!categoryCounts[category]) {
                categoryCounts[category] = 0;
            }
            categoryCounts[category] += orderProduct.quantity;
        });
    });

    const result = Object.keys(categoryCounts).map(category => ({
        category,
        count: categoryCounts[category]
    }));

    return result;
}

export default async function SalesPage() {
    const orders = await getOrders()
    const products = await getTotalProductsByProductName()

    const productsArray = Object.values(products)
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth());
    oneMonthAgo.setDate(1); 

    const ordersLastMonth = orders.filter(order => order.date.getMonth() === oneMonthAgo.getMonth())

    const monthNamesInSpanish = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    const data = orders.map(order => ({
        totalOrders: order.orderProducts.length,
        date: monthNamesInSpanish[order.date.getMonth()],
        total: order.total
    }));
    
    type Accumulator = {
        [key: string]: {
            totalOrders: number;
            total: number;
        };
    };
    
    const totalPorMes = data.reduce<Accumulator>((acc, { date, totalOrders, total }) => {
        if (!acc[date]) {
            acc[date] = { totalOrders: 0, total: 0 };
        }
        acc[date].totalOrders += totalOrders;
        acc[date].total += total;
        return acc;
    }, {});
    
    const resultado = Object.entries(totalPorMes).map(([date, { totalOrders, total }]) => ({
        date,
        totalOrders,
        total
    }));

    resultado.sort((a, b) => {
        return monthNamesInSpanish.indexOf(a.date) - monthNamesInSpanish.indexOf(b.date);
    });

    const ordersByDate = orders.sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (dateA < dateB) {
            return -1;
        }
        if (dateA > dateB) {
            return 1;
        }
        return 0;
    })

    const dataOrders = ordersByDate.map(order => ({
        fecha: order.date,
        productos: order.orderProducts.length
    }))


    const dataCategories = await getProductCountByCategory()
    

    return (
    <div>
        <div className="flex bg-neutral-800 gap-3 p-1 mb-4 rounded-sm items-center justify-evenly">
            <Image height={100} width={100} src="/menu.png" alt="logo menu"/>
            <h2 className="title-menu my-4 text-xl font-bold text-white">Analisis de Ventas del Wok Dorado</h2>
        </div>
        <main className="grid">
            <div>
                <h2 className="font-bold text-lg">Medidas estadisticas de ventas</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4">
                    <CardStatistics title={"Total ventas Anuales"} statistic={formatCurrency(orders.reduce((acc, order) => acc+order.total, 0))} icon={faBagShopping} color={"text-blue-600"}/>
                    <CardStatistics title={"Productos vendidos"} statistic={orders.reduce((acc, order) => acc+order.orderProducts.reduce((ac, product)=> ac+product.quantity, 0), 0)+" Unidades"} icon={faBowlFood} color={"text-yellow-600"}/>
                    <CardStatistics title={"Ordenes totales"} statistic={(orders.length)+" Ordenes"} icon={faBox} color={"text-orange-600"}/>
                    <CardStatistics title={"Ordenes último mes"} statistic={formatCurrency(ordersLastMonth.reduce((acc, order) => acc+order.total, 0))} icon={faFileInvoiceDollar} color={"text-green-600"}/>
                </div>
            </div>
            <div className="grid grid-layout grid-layout-2 gap-3">
                <SimpleBarCharts data={resultado}/>
                <SimpleCircleChart data={productsArray}/>
            </div>
            <div className="mt-10 grid grid-layout grid-layout-2 gap-3">
                <SimpleLineChart data={dataOrders}/>
                <SimpleRadarChart data={dataCategories}/>
            </div>
        </main>
    </div>
    )
}
