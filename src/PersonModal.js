import style from './PersonModal.module.css'

const PersonModal = ({ image, name, icon, personModal, setPersonModal }) => {
  const handleClick = () => {
    setPersonModal(false)
  }

  // person-modal-container show-person-modal
  // <div className={`${style['lds-ellipsis']} ${style[`${clr}`]}`}></div>
  return (
    <div
      data-id='close'
      onClick={(e) => {
        if (e.target.dataset.id === 'close') {
          handleClick()
        }
      }}
      className={`${
        !personModal
          ? `${style['person-modal-container']}`
          : `${style['person-modal-container']} ${style['show-person-modal']}`
      }`}
    >
      <div className={`${style['person-modal']}`}>
        <button onClick={handleClick}>
          <i>{icon}</i>
        </button>
        <img src={image} alt={name} />
      </div>
    </div>
  )
}

export default PersonModal
