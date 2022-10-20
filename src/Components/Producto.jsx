import React, {useEffect} from "react"
import { Link } from "react-router-dom"


function Producto(/* aca recibe las props: */ {id, title, price, image}){

   // const {titulo, title, image, price, edition, product} = props

   useEffect(
       () => {
           console.log("Se modificó title", title)
       },
       [title]
   )

    return(
        <>
            <div>
                <h2>{title}</h2>
                <img src={image} alt="" />
                <p>{price}</p>
                <Link to={`/productos/${id}`}><button>Ver Detalle</button></Link>
            </div>
        </>
    )
}

export default Producto