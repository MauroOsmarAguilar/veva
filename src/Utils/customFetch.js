export const customFetch = (products) => {
    
    // Agrega 2 segundos al renderizado
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}