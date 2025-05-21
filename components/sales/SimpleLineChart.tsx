"use client"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

type SimpleLineChartProps = {
    data: {
        fecha: Date;
        productos: number;
    }[]
}

export default function SimpleLineChart({data} : SimpleLineChartProps) {
    return (
    <div className="p-5 shadow-xl rounded-md">
        <h2 className="my-4 font-bold text-xl">Productos por orden</h2>
        <ResponsiveContainer width="100%" height="80%">
            <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="fecha" />
                <YAxis yAxisId="right" orientation="left" />
                <Tooltip />
                <Legend />
                <Line yAxisId="right" type="monotone" dataKey="productos" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    </div>
    )
}
