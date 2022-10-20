import { Link } from "react-router-dom";

function NavBar(){
    return(
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/contacto'>Contacto</Link></li>
        </ul>
    )
}

export default NavBar