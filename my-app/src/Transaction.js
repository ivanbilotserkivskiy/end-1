import PropTypes from 'prop-types'


const TransHistory = ({type, amount, currency}) => {
    return (
      <tbody>
        <tr>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      </tbody>

    )

}


TransHistory.propTypes = {
    type:PropTypes.string,
    amoount:PropTypes.number,
    currency:PropTypes.string,
}

export default TransHistory