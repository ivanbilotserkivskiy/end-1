import PropTypes from 'prop-types'

const FriendList = ({avatar, isOnline, name})=>{
        return (
            <li className="item">
  <span className="status">{isOnline}</span>
  <img className="avatar" src={avatar} alt="User avatar" width="48" />
  <p className="name">{name}</p>
</li>
        )
}


FriendList.propTypes = {
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
    name: PropTypes.string,
}

export default FriendList