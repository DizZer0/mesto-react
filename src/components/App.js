import React from 'react';
import logo from '../images/header-logo.svg'
import '../index.css';

function App() {
  return (
    <div className="page">
    <header className="header">
      <img className="logo header__logo" src={logo} alt="логотип сайта mesto russian" />
    </header>
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
    <footer className="footer">
      <p className="footer__copyright">© 2020 Mesto Russia</p>
    </footer>
    <div className="popup popup_edit-profile ">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <form action="#"  className="form-change edit-profile" name="edit-profile" novalidate>
          <h2 className="form-change__title">Редактировать профиль</h2>
          <fieldset className="form-change__input-text">
            <input id="name-input" type="text" className="form-change__text edit-profile__text-name" minlength="2" maxlength="40" required name='name' placeholder="Введите своё имя" />
            <span className="form-change__input-error name-input-error"></span>
            <input id="job-input" type="text" className="form-change__text edit-profile__text-job" minlength="2" maxlength="200" required  name='about' placeholder="Кем вы работаете?" />
            <span className="form-change__input-error job-input-error"></span>
          </fieldset>
          <button className="form-change__save-button edit-profile__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_add-photo ">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <form action="#" className="form-change add-photo" name="add-photo" novalidate>
          <h2 className="form-change__title">Новое место</h2>
          <fieldset className="form-change__input-text">
            <input id="title-input" type="text" className="form-change__text  add-photo__text-title" minlength="2" maxlength="30" required name="name" placeholder="Название" />
            <span className="form-change__input-error title-input-error">тут ошибка тут ошибка</span>
            <input id="link-input" type="url" className="form-change__text add-photo__text-link" required name="link" placeholder="Ссылка на картинку" /> 
            <span className="form-change__input-error link-input-error"></span>
          </fieldset>
          <button className="form-change__save-button add-photo__save-button" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_edit-avatar">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <form action="#" className="form-change edit-avatar" name="edit-avatar" novalidate>
          <h2 className="form-change__title">Обновить аватар</h2>
          <fieldset className="form-change__input-text">
            <input id="avatar-input" type="url" className="form-change__text edit-avatar__text-link" required name="avatar" placeholder="Ссылка на картинку" /> 
            <span className="form-change__input-error avatar-input-error"></span>
          </fieldset>
          <button className="form-change__save-button edit-avatar__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_view-photo popup_view-photo ">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <div className="view-photo">
          <img className='view-photo__img' src="#" alt="" />
          <h2 className="view-photo__title"></h2>
        </div>
      </div>
    </div>
    <div className="popup popup_delete-photo">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <form className="form-change delete-photo">
          <h2 className="form-change__title form-change__title_type_delete">Вы уверены?</h2>
          <button className="form-change__save-button delete-photo__button">Да</button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default App;
