import { Route, Routes } from "react-router-dom"
//import Productos from "../Components/Productos"
import Contacto from "../Pages/Contacto"
import Detalle from "../Pages/Detalle"
import Home from "../Pages/Home"

function Public(){
    return(
        <Routes>
            <Route path='/' element={<Home />} />
{/*             <Route path='/productos' element={<Productos />} /> */}
            <Route path='/productos/:id' element={<Detalle />} />
            <Route path='/contacto' element={<Contacto />} />
        </Routes>
    )
}

export default Public