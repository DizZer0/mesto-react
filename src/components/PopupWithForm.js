import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? 'popup_opened' : ""}`}>
      <div className="popup__container">
        <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
        <form action="#"  className={`form-change ${props.name}`} name={props.name} novalidate>  
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm