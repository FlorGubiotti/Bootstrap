export function getAllProducts(){
    return fetch('http://localhost:3000/tareas')
             .then(res=>res.json())
             .then(json=>(json))
 
}
 
export function getOneProduct(id){
    return fetch(`http://localhost:3000/tareas/${id}`)
             .then(res=>res.json())
             .then(json=>(json))
}

export function getOneProductInCategory (estado){
    return fetch(`http://localhost:3000/tareas?estado=${estado}`)
             .then(res=>res.json())
             .then(json=>(json))
}