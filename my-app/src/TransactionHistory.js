import TransHistory from "./Transaction";


export default function TransactionHistory ({items}){
    return (     <table className="transaction-history">  
           <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead> 
                    {items.map(item => (
                        
                    <TransHistory
                    key={item.id}
                    type={item.type}
                    currency={item.currency}
                    amount={item.amount}
                    />
                ))}
                </table>
    )


}