import React from 'react';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import PopupAddPhoto from './PopupAddPhoto'
import PopupDeletePhoto from './PopupDeletePhoto'
import PopupEditAvatar from './PopupEditAvatar'
import PopupEditProfile from './PopupEditProfile'
import api from '../utils/Api';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [sel, setSel] = React.useState(<PopupAddPhoto />)
  const [selectedCard, setSeletedCard] = React.useState({
    active: false,
    src: '',
    name: '',
  })
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }
  function hanldeCardClick(evt) {
    setSeletedCard({
      active: true,
      src: evt.target.src,
      name: evt.target.alt
    })
  }

  function closeAllPopups() {
    setAddPlacePopupOpen(false)
    setEditProfilePopupOpen(false)
    setEditAvatarPopupOpen(false)
    setSeletedCard({active: false})
  }
  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={hanldeCardClick}
        />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        textBtn={'Сохранить'}
      >
        <PopupEditProfile />
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        textBtn={'Создать'}
      >
        <PopupAddPhoto />
      </PopupWithForm>
      <PopupWithForm 
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        textBtn={'Сохранить'}
      > 
        <PopupEditAvatar />
      </PopupWithForm>
      <ImagePopup 
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
