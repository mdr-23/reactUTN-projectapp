import React, {useState, useEffect} from 'react'
import { getProductosServices } from '../Services/productosService'
import Producto from './Producto'


function Productos(){

    const [productos, setProductos] = useState([])

    useEffect(
        () => {
            const result = async() =>{
                try{
                    const responseData = await getProductosServices()
                    console.log(responseData.results)
                    setProductos(responseData.results)
                }catch(e){
                    console.log(e)
                }
            }
            result()
        },
        []
    )

    /* FILTROS */
/*     const filtrarPeliculas = () => {

        setTitulo("Películas")

        setProductos(
            [
                {
                    id: 1,
                    title: "IT",
                    image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6138/6138132_sa.jpg",
                    price: '10€',
                    edition: "2017",
                    product: "Película",
                }
            ]
        )
    }
    
    const filtrarLibros = () => {

        setTitulo("Libros")

        setProductos(
            [
                {
                    id: 2,
                    title: "IT",
                    image: "https://upload.wikimedia.org/wikipedia/en/7/78/It_%28Stephen_King_novel_-_cover_art%29.jpg",
                    price: '50€',
                    edition: "1980",
                    product: "Libro",
                }
            ]
        )
    } */

    return(
        <>
{/*             <button onClick={filtrarLibros}>Libros</button>
            <button onClick={filtrarPeliculas}>Películas</button> */}

             {productos.map(producto => <Producto id={producto.id} title={producto.title} image={producto.thumbnail} price={"$ " + producto.price} />)}
        </>
    )
}

export default Productos