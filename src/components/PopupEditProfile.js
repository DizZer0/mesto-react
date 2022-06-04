import React from "react";

function PopupEditProfile() {
  return (
    <>
      <h2 className="form-change__title">Редактировать профиль</h2>
      <fieldset className="form-change__input-text">
        <input id="name-input" type="text" className="form-change__text edit-profile__text-name" minlength="2" maxlength="40" required name='name' placeholder="Введите своё имя" />
        <span className="form-change__input-error name-input-error"></span>
        <input id="job-input" type="text" className="form-change__text edit-profile__text-job" minlength="2" maxlength="200" required  name='about' placeholder="Кем вы работаете?" />
        <span className="form-change__input-error job-input-error"></span>
      </fieldset>
      <button className="form-change__save-button edit-profile__save-button" type="submit">Сохранить</button>
    </>
  )
}