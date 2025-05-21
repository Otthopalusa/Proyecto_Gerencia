"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

type SimpleCircleChartProps = {
    data:{
            name: string
            value: number
        }[]
}

export default function SimpleCircleChart({data} : SimpleCircleChartProps) {
    const COLORS: string[] = [
        "#E26D1D", // Coral
        "#E21D1D", // Royal Purple
        "#E2AC1D", // Leaf Green
        "#E7DD2C", // Pale Pink
        "#A1E72C", // Cool Blue
        "#32A822", // Mauve
        "#22A85B", // Amethyst
        "#22A89C", // Teal
        "#224AA8", // Fiery Red
        "#3A22A8",
        "#7B22A8",
        "#C92893",
        "#C92862"
    ];

    return (
    <div className="w-full h-full shadow-xl rounded-md p-5">
        <div style={{width: '100%', height: "70%"}}>
            <h2 className="my-4 font-bold text-xl">Ventas por producto</h2>
            <ResponsiveContainer>
                <PieChart>
                    <Pie
                        dataKey="value"
                        data={data}
                        innerRadius={10}
                        fill="#000"
                    >
                        {data.map((entry, i) => (
                            <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]}/>
                        ))}
                    </Pie>
                        <Tooltip/>
                </PieChart>
            </ResponsiveContainer>
        </div>
    </div>
    )
}
