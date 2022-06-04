import React from "react";

function PopupAddForm() {
  return (
    <>
      <h2 className="form-change__title">Новое место</h2>
      <fieldset className="form-change__input-text">
        <input id="title-input" type="text" className="form-change__text  add-photo__text-title" minlength="2" maxlength="30" required name="name" placeholder="Название" />
        <span className="form-change__input-error title-input-error">тут ошибка тут ошибка</span>
        <input id="link-input" type="url" className="form-change__text add-photo__text-link" required name="link" placeholder="Ссылка на картинку" /> 
        <span className="form-change__input-error link-input-error"></span>
      </fieldset>
      <button className="form-change__save-button add-photo__save-button" type="submit">Создать</button>
    </>  
  )
}