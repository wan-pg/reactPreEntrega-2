import { useState, useEffect } from "react";

import { items } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = () =>{
    const [products, setProducts] = useState([])

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) =>{
            setTimeout(() => {
                resolve(items)
            },2000)
            
        })
        promesa.then(result => setProducts(result))

    },[])
    
    
    return(
        <div>
            <h1>Productos</h1>
            {products.length === 0 ?
            ( <div>Cargando productos </div>) :
            <ItemList products = {products}/>}
        </div>
    );
}