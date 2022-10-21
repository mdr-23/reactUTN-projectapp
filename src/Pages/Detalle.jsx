import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductosById } from "../Services/productosService"

function Detalle(){

    const {id} = useParams()

    const [producto, setProducto] = useState([])

    useEffect(
        () => {
            const result = async() =>{
                try {
                    const responseData = await getProductosById(id);
                    if (responseData) {
                      setProducto(responseData);
                    }
                  }catch (e) {
                    console.log(e);
                  }
            }
            result()
        },
        [id]
    )

/*     let img = producto.pictures.map((a) => a.url) */



    return(
        <>
            <h1>Detalle</h1>

            <h2>{producto.title}</h2>
            <img src={producto.thumbnail} alt="" />
            <p>{producto.descriptions}</p>
            <p>{'$ '+ producto.price}</p>
            <button>Comprar</button>
        </>
    )
}

export default Detalle