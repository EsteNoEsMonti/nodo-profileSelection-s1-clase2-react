import { useState } from "react"
import ProfileSection from "./components/ProfileSection"

function App() {

  const [auth, setAuth] = useState(false)
  console.log(auth)

  const profiles = [
    { id: '1', name: 'Lucas', image: 'src/assets/profile1.png' },
    { id: '2', name: 'Ruben', image: 'src/assets/profile2.png' },
    { id: '3', name: 'Carlitos', image: 'src/assets/profile3.png' },
    { id: '4', name: 'Maldonado', image: 'src/assets/profile4.png' },
  ]

  return (
    <>
      {auth === false ?
        <button onClick={() => setAuth(!auth)}>Loggin</button>
        :
        <ProfileSection profiles={profiles} />
      }
    </>
  )
}

export default App
