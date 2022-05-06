import TransHistory from "./Transaction";


export default function TransactionHistory ({items}){
    return (     <div>   
                    {items.map(item => (
                    <TransHistory
                    key={item.id}
                    type={item.type}
                    currency={item.currency}
                    amoount={item.amoount}
                    />
                ))}
                </div>
    )


}