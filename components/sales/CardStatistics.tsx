import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"


type CardStatisticsProps = {
    title: string
    statistic: string
    icon: IconDefinition
    color: string
}

export default function CardStatistics({title, statistic, icon, color} : CardStatisticsProps) {
    return (
    <div className="flex items-center gap-4 p-3 rounded-md shadow-lg w-full m-2">
        <FontAwesomeIcon className={`h-10 ${color}`} icon={icon}/>
        <div className="">    
            <h4 className="font-bold text-md text-neutral-700">{title}</h4>
            <p className="font-semibold text-xl">{statistic}</p>
        </div>
    </div>
    )
}
