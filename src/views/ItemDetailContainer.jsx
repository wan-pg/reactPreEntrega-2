import { useState, useEffect } from "react";


import { items } from "../data/products";
import {ItemDetail} from "../components/ItemDetail"

export const ItemDetailContainer = () =>{
    
    const [producto, setProducto] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) =>{
            setTimeout(() => {
                resolve(items)
            },2000)
            
        })
        promesa.then(result => {
            setProducto(result)
            })            
        }, [])

    
    
    
    return(
        <div>
        <h1>Detalles</h1>
        {producto.length === 0 ?
        ( <div>Cargando productos </div>) :
        <ItemDetail product = {producto}/>}
    </div>
    );
}