import { Link } from "react-router-dom";

function NavBar(){
    return(
        <ul>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li><Link to='/registro'>Registro</Link></li>
        </ul>
    )
}

export default NavBar