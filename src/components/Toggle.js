import { FaSun as Sun } from 'react-icons/fa'
import { BsFillMoonStarsFill as Moon } from 'react-icons/bs'
import style from './Toggle.module.css'

const Toggle = ({ setLocalStorage, theme }) => {
  return (
    <div className={style.toggle}>
      <input
        onChange={(e) => {
          if (!e.target.checked) {
            setLocalStorage('light')
            console.log(localStorage)
          } else {
            setLocalStorage('dark')
            console.log(localStorage)
          }
        }}
        type='checkbox'
        checked={theme === 'dark'}
        id='switch'
      />

      <label htmlFor='switch'>
        <div className='label'>
          <Sun className={style.sun} />
          <Moon className={style.moon} />
        </div>
      </label>
    </div>
  )
}

export default Toggle
