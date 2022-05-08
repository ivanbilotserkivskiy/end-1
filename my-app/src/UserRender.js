import User from "./User.js";

export default function UserRender ({items}) {
    return (
        <User
            username={items.username}
            tag={items.tag}
            location={items.location}
            avatar={items.avatar}
            followers={items.stats.followers}
            views={items.stats.views}
            likes={items.stats.likes}
        />
    )

}