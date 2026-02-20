import React from 'react'

const Segundo = () => {

    const saludo = "Hola mundo tec";

    function MostrarSaludo() { 
        return 'Saludando desde el return';
    }
    
    return (
        <div>
            <h1>Segundo</h1>
            <p>{saludo}</p>
            <p>{MostrarSaludo()}</p>
        </div>
    )
}

export default Segundo