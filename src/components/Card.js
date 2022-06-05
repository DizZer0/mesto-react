import React from "react";
function Card(props) {
  return(
    <article className="photo-grid__item">
      <img className="photo-grid__image" src={props.link} alt={props.name} onClick={props.onCardClick}/>
      <button className="photo-grid__delete-button" type="button"></button>
      <div className="photo-grid__info">
        <h2 className="photo-grid__title">{props.name}</h2>
        <div className="photo-grid__container">
          <button className="photo-grid__like-button" type="button"></button>
          <h3 className="photo-grid__like-number" name="likes">{props.likes}</h3>
        </div>
      </div>
    </article>
  )
}
export default Card 