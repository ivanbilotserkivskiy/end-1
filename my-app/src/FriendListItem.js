import FriendList from "./FriendList";

const FriendListItem = ({items})=> {
    return (
        <ul>
           
            {items.map(item=>(
                 
               <FriendList
               key={item.id}
               name={item.name}
               isOnline={item.isOnline}
               avatar={item.avatar}
               />
            ))
            
        }
        
        </ul>
    )

}


export default FriendListItem