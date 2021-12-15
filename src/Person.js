import style from './Person.module.css'

const Person = ({ icon, text }) => {
  return (
    <li className={style.li}>
      <i className={style.icon}>{icon}</i>
      <h2>{text}</h2>
    </li>
  )
}

export default Person
