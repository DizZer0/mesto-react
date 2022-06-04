import React from "react";

function ImagePopup() {
  return(
    <div className="popup popup_type_view-photo popup_view-photo ">
      <div className="popup__container">
        <button className="popup__exit-button" type="button"></button>
        <div className="view-photo">
          <img className='view-photo__img' src="#" alt="" />
          <h2 className="view-photo__title"></h2>
        </div>
      </div>
    </div>
  )
}