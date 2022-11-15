import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductosById } from "../Services/productosService"
import { Button } from 'react-bootstrap'

function Detalle(){

    const {id} = useParams()

    const [producto, setProducto] = useState([])

    useEffect(
        () => {
            const result = async() =>{
                try {
                    const productoData = await getProductosById(id);
                    if (productoData) {
                      setProducto(productoData.data());
                    }
                  }catch (e) {
                    console.log(e);
                  }
            }
            result()
        },
        [id]
    )

    return(
        <div className="row d-flex align-items-center justify-content-center container mx-auto p-5">
            <div className="col-1">
                <img src={producto.image} className="detalle-img" alt="" />
            </div>

            <div className="col-11">
                <h1 className="detalle-title">{producto.name}</h1>
                <div className="detalle-bg-amarillo">
                    <p>{producto.description}</p>
                    <div className="text-end">
                        <p className="detalle-precio">{producto.price}</p>
                        <Button className="detalle-btn">Comprar</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Detalle