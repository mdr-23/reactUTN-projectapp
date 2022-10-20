export function getProductosServices(){
    return fetch("https://api.mercadolibre.com/sites/MLA/search?q=stephen-king").then((res)=>res.json())
}

export function getProductosById(id){
    return fetch(`https://api.mercadolibre.com/items/${id}`).then((res)=>res.json())
}