import React from "react";
import api from "../utils/Api"

function Main(props) {
  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()

  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about) 
        setUserAvatar(res.avatar)
      })
  })
  return (
    <main className="content">
      <section className="profile">
        <img  alt="аватарка пользователя" className="profile__avatar" src={userAvatar} />
        <button className="profile__avatar-btn" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <h2 className="profile__status">{userDescription}</h2>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}></button>
      </section>
      <section className="photo-grid">
      </section>
    </main>
  )
}
 export default Main