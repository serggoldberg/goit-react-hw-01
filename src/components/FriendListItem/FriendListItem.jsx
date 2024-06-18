import css from './FriendListItem.module.css'
import clsx from 'clsx'

export default function FriendListItem({ friend: {avatar, name, isOnline }}){
    return (
        <div className={css.card}>
            <img className={css.avatar} src= {avatar} alt="Avatar" width="48" />
            <p className={css.title}>{name}</p>
            <p className={clsx (isOnline === true ? css.online : css.offline) }>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}