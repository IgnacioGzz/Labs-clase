import React from 'react'
import bancos from './assets/bancos.js'

const Tercer = () => {
  return (
    <div>

      <h1>Lista de Bancos </h1>
      <ul>
        {bancos.map((b) => (
          <li key={b.code}>
            {b.code} - {b.name} - {b.country}
            
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Tercer