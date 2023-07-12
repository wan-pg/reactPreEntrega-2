import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink} from 'react-router-dom';

import  {items}  from "../data/products";

const categorias = items.map(product => product.proceso)
const unique = new Set(categorias) // nuevo array sin duplicados

export const  Barra =  () => {
    return( 
        
           <>
              <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                  <Navbar.Brand>
                      <NavLink  to = "/" className="nav-link">Cokus</NavLink>
                  </Navbar.Brand>
                    <Nav className="me-auto">
                      {[...unique].map(item=>(
                        <NavLink 
                          key={item}
                          className="nav-link" 
                          to = {`/category/${item}`}> {item}
                        </NavLink>
                        
                      ))}
                    </Nav>
                </Container>
              </Navbar>
            </>       

    );
}
