// importaciones ----------------------------------------------------------------------
import React from 'react'

// lógica (JS) ------------------------------------------------------------------------
const MyFistComponent = () => {
  // al comienzo se del componente se recomienda (por convención) inicializar el state 
  // Ex: const [example, setExample] = useState("Example")

  // resto de funciones y lógica 
  const msg = "xfa hidratate"

  // En el return va la vista --------------------------------------------------------
  return (
    <>
      <h1 className='bg-red-900'>MyFistComponent</h1>
      <p>{msg}</p>
    </>
  )
}

export default MyFistComponent