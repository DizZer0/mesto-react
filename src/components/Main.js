import React from "react";
function Main() {
  return (
    <main className="content">
      <section className="profile">
        <img  alt="аватарка пользователя" className="profile__avatar" />
        <button className="profile__avatar-btn"></button>
        <div className="profile__info">
          <h1 className="profile__name">Жак-Ив Кусто</h1>
          <h2 className="profile__status">Исследователь океана</h2>
          <button className="profile__edit-button" type="button"></button>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="photo-grid">
      </section>
    </main>
  )
}
 export default Main