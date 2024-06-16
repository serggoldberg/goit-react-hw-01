import css from './FriendListItem.module.css'

export default function FriendListItem({ friend: {avatar, name, isOnline }}){
    return (
        <div>
            <img src= {avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={isOnline === true ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}