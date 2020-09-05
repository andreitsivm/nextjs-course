import {Navbar, Nav} from 'react-bootstrap'
import Link from 'next/link'
export default function Navigation(){
    return(
        <Navbar bg="primary" expand="lg">
            <Navbar.Brand>Incanto Perfumery</Navbar.Brand>
            <Navbar.Collapse>
                <Nav>
                    <Link href={'/'}><a>Home</a></Link>
                    <Link href={'/beer'}><a>Beer</a></Link>
                    <Link href={'/contacts'}><a>Contacts</a></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}