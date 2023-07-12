

export const ItemDetail = ({product}) => {
    return ( 
      <>
        <div>{product.nombre}</div>
        <div>{product.proceso}</div>
        <div>{product.precio}</div>
        <div>{product.descripción}</div>
        <img src={product.img} alt="" />

      </>
      
    
            
       
        
    

)}