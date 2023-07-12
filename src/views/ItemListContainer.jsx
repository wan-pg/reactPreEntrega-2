import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { items } from "../data/products";
import { ItemList } from "../components/ItemList";

export const ItemListContainer = () =>{
    const [products, setProducts] = useState([])

    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolve, rejected) =>{
            setTimeout(() => {
                resolve(items)
            },2000)
            
        })
        promesa.then(result => {
            if (id){

                setProducts(result.filter(product => product.proceso === id))

            } else {

                setProducts(result)

            }
            
        })

    },[id])
    
    
    return(
        <div>
            <h1>Productos</h1>
            {products.length === 0 ?
            ( <div>Cargando productos </div>) :
            <ItemList products = {products}/>}
        </div>
    );
}