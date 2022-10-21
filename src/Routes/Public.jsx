import { Route, Routes } from "react-router-dom"
import Detalle from "../Pages/Detalle"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import Registro from "../Pages/Registro"

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
{/*             <Route path='/productos' element={<Productos />} /> */}
            <Route path='/productos/:id' element={<Detalle />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
        </Routes>
    )
}

export default Public