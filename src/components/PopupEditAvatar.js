import React from "react";

function PopupEditAvatar() {
  return(
    <>
      <h2 className="form-change__title">Обновить аватар</h2>
      <fieldset className="form-change__input-text">
        <input id="avatar-input" type="url" className="form-change__text edit-avatar__text-link" required name="avatar" placeholder="Ссылка на картинку" /> 
        <span className="form-change__input-error avatar-input-error"></span>
      </fieldset>
    </>
  )
}

export default PopupEditAvatar