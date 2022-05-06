import PropTypes from 'prop-types'


const TransHistory = ({type, amoount, currency}) => {
    return (
      <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
    
      <tbody>
        <tr>
          <td>Invoice</td>
          <td>125</td>
          <td>USD</td>
        </tr>
        <tr>
          <td>Withdrawal</td>
          <td>85</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
    )

}


TransHistory.propTypes = {
    type:PropTypes.string,
    amoount:PropTypes.number,
    currency:PropTypes.string,
}

export default TransHistory