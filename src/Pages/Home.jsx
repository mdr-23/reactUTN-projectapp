import CarouselHome from "../Components/CarouselHome"
import Productos from "../Components/Productos"
import firebase from "../Config/firebase"

function Home(){
    
    console.log(firebase)

    return(
        <>

            <CarouselHome />
            <h2 className="stephen text-center">STEPHEN</h2>
            <Productos />

        </>
    )
}

export default Home