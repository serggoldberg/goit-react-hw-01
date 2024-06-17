import css from './Profile.module.css'

export default function Profile ({ userdata: { username, tag, location, avatar, stats: {followers, views, likes}}}) {
    return (
<div className={css.container}>
  <div className={css.basic}>
    <img className={css.image}
      src={avatar}
      alt="User avatar"
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>@{tag}</p>
    <p className={css.location}>{location}</p>
  </div>

  <ul className={css.list}>
    <li className={css.column}>
      <span className={css.title}>Followers</span>
      <span className={css.number}>{followers}</span>
    </li>
    <li className={css.column}>
      <span className={css.title}>Views</span>
      <span className={css.number}>{views}</span>
    </li>
    <li className={css.column}>
      <span className={css.title}>Likes</span>
      <span className={css.number}>{likes}</span>
    </li>
  </ul>
</div>
    );
}