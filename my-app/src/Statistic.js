import PropTypes from 'prop-types'


const Static = ({label, percentage})=> {
    return (
        <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
        </li>
    )
}


Static.propTypes = {
    label:PropTypes.string,
    label:PropTypes.number,
}

export default Static