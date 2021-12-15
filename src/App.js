import Person from './Person'
import React, { useEffect, useState } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaMapMarkedAlt,
  FaBirthdayCake,
  FaPhoneSquare,
  FaTimes,
} from 'react-icons/fa'
import PersonModal from './PersonModal'
import Loader from './components/Loader'
import Toggle from './components/Toggle'

function App() {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState([])
  const [personModal, setPersonModal] = useState(false)
  const localTheme = localStorage.getItem('theme') || 'light'
  const [theme, setTheme] = useState(localTheme)

  const setLocalStorage = (theme) => {
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const fetchPerson = async () => {
    setLoading(true)
    try {
      const res = await fetch('https://randomuser.me/api/')
      const data = await res.json()
      const person = data.results[0]
      const { large: image } = person.picture
      const { first, last } = person.name
      const { phone, email } = person
      const {
        dob: { age },
      } = person
      const { city } = person.location

      const newPerson = {
        image,
        name: `${first} ${last}`,
        email,
        phone,
        age,
        city,
      }

      setPerson(newPerson)
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    fetchPerson()
  }, [])

  const handleTheme = (theme) => {
    setTheme(theme)
  }

  const { image, name, email, city, phone, age } = person

  return (
    <div
      className={`${theme === 'light' ? 'container light' : 'container dark'}`}
    >
      <main>
        <PersonModal
          personModal={personModal}
          setPersonModal={setPersonModal}
          image={image}
          name={name}
          icon={<FaTimes />}
        />
        <Toggle
          theme={theme}
          handleTheme={handleTheme}
          setLocalStorage={setLocalStorage}
        />

        <img
          onClick={() => setPersonModal(true)}
          className='img'
          src={image}
          alt={name}
        />

        <ul className='person-info'>
          <Person icon={<FaUser />} text={name} />
          <Person icon={<FaBirthdayCake />} text={age} />
          <Person icon={<FaEnvelopeOpen />} text={email} />
          <Person icon={<FaMapMarkedAlt />} text={city} />
          <Person icon={<FaPhoneSquare />} text={phone} />
        </ul>
        <button onClick={() => fetchPerson()} className='btn random-person-btn'>
          {loading ? <Loader /> : 'Random Person'}
        </button>
      </main>
    </div>
  )
}

export default App
