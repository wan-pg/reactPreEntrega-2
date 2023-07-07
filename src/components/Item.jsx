
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export const Item = ({product}) => {
    return ( 
    <Card 
        style={{ width: '18rem' }}
        key = {product.id}
        >

      <Card.Img variant="top" src= {product.img} />
      <Card.Body>
        <Card.Title>{product.nombre}</Card.Title>
        <Card.Text>
           Proceso: {product.proceso}
        </Card.Text>
        <Link>
            <Button variant="primary">Detalle</Button>
        </Link>
            
       
        
      </Card.Body>
    </Card>

)}