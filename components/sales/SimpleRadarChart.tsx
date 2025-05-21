"use client"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

type SimpleRadarChartProps = {
    data : {
        category : string
        count : number
    }[]
}

export default function SimpleRadarChart({data} : SimpleRadarChartProps) {
    return (
    <div className="w-full h-full shadow-xl rounded-md p-5">
        <h2 className="my-4 font-bold text-xl">Ventas por categoria</h2>
        <ResponsiveContainer width="100%" height="80%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="category" />
            <PolarRadiusAxis />
            <Radar name="Mike" dataKey="count" stroke="#000" fill="#000" fillOpacity={0.6} />
            </RadarChart>
        </ResponsiveContainer>
    </div>
    )
}
