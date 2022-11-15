import firebase from '../Config/firebase'

export async function getProductosServices(buscar){
    //return fetch("https://api.mercadolibre.com/sites/MLA/search?q=stephen-king").then((res)=>res.json())
    const querySnapshot = await firebase.firestore().collection("productos")
    .get()
    return querySnapshot.docs
}

export async function getProductosById(id){
    //return fetch(`https://api.mercadolibre.com/items/${id}`).then((res)=>res.json())
    const querySnapshot = await firebase.firestore().doc(`productos/${id}`).get()
    return querySnapshot
}

export async function update(id,payload){
    return await firebase.firestore().doc(`productos/${id}`).set(payload)
}

export async function deleteProducto(id){
    return await firebase.firestore().doc(`productos/${id}`).delete()
}