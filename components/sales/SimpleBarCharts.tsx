"use client"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type SimpleBarChartsProps = {
    data : {
        totalOrders : number
        date : string
        total : number
    }[]
}

export default function SimpleBarCharts({data} : SimpleBarChartsProps) {
    
    return (
    <div className="p-5 shadow-xl rounded-md">
        <h2 className="my-4 font-bold text-xl">Estadísticas por mes</h2>
        <ResponsiveContainer width="100%" aspect={2}>
            <BarChart 
                data={data} 
                width={500}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="4 1 2"/>
                <XAxis dataKey="date"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="total" fill="#ca8a04"/>
            </BarChart>
        </ResponsiveContainer>
    </div>
    )
}
