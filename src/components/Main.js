import React from "react";
import api from "../utils/Api"
import Card from "./Card"

function Main(props) {
  const [userName, setUserName] = React.useState('')
  const [userDescription, setUserDescription] = React.useState('')
  const [userAvatar, setUserAvatar] = React.useState('')
  const [cards, setCards] = React.useState([])
 
  React.useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name)
        setUserDescription(res.about) 
        setUserAvatar(res.avatar)
      })
      .catch(err => console.log(err))
    
    api.getCardItems()
      .then((res) => {
        setCards(res)
      })
      .catch(err => console.log(err))
  }, [])
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
      {cards.map(card => <Card key={card._id} name={card.name} link={card.link} likes={card.likes.length} onCardClick={props.onCardClick}/>)}
      </section>
    </main>
  )
}

 export default Main