function Login(){
    return(
        <>
            <h1>Iniciar sesión</h1>

            <form action="">
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

export default Login