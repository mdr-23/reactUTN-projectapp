//import { useState } from "react"

function Registro(){

    return(
        <>
            <h1>Registro</h1>

            <form action="">
                <div>
                    <label htmlFor="">Nombre: </label>
                    <input type="text" id="nombre" />
                </div>
                <div>
                    <label htmlFor="">Apellido: </label>
                    <input type="text" id="apellido" />
                </div>
                <div>
                    <label htmlFor="">Email: </label>
                    <input type="email" id="email" />
                </div>
                <div>
                    <label htmlFor="">Contraseña: </label>
                    <input type="password" id="password" />
                </div>
                <button>Registrarse</button>
            </form>
        </>
    )
}

export default Registro