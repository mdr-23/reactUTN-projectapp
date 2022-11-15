import { Route, Routes } from "react-router-dom"
import Detalle from "../Pages/Detalle"
import Home from "../Pages/Home"
import Login from "../Pages/Login"
import ProductosAlta from "../Pages/ProductosAlta"
import ProductosModificar from "../Pages/ProductosModificar"
import Registro from "../Pages/Registro"

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/productos/:id' element={<Detalle />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registro' element={<Registro />} />
            <Route path='/productos/alta' element={<ProductosAlta />} />
            <Route path='/productos/editar/:id' element={<ProductosModificar />} />
        </Routes>
    )
}

export default Public