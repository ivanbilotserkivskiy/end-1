import Static from "./Statistic";

export default function Statistic ({items}) {
    return (
        <ul>
            {items.map(item=>(
                <Static
                    key={item.id}
                    label={item.label}
                    percentage={item.percentage}
                />
            ))}
            
        </ul>
    )
} 