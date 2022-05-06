import TransHistory from "./Transaction";


export default function TransactionHistory2 ({items}){
    return (
        <table className="transaction-history">
                {items.map(item => (
                       
                        <thead>
                          <tr>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Currency</th>
                          </tr>
                        </thead>
                      
                        <tbody>
                          <tr>
                            <td>{type}</td>
                            <td>{amoount}</td>
                            <td>{currency}</td>
                          </tr>
                          <tr>
                            <td>{type}</td>
                            <td>{amoount}</td>
                            <td>{currency}</td>
                          </tr>
                        </tbody>
                      
                ))}
                </table>
    )


}