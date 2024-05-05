import { Button, Card, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

type MenuCardType = {
    children: React.ReactNode,
    link: string,
    color: string
    img: string 
}

const MenuCard = ({children, img,link, color}: MenuCardType) =>{
    return(<>
        <Card>
            <Card.Body>
                <Card.Title className="text-center">{children}</Card.Title>
                <Card.Img style={ {height: '450px'}} src={img}></Card.Img>
                <Card.Text className="text-center">
                    {children}
                </Card.Text>
                <Container className="text-center">
                    <Button className="btn-lg" variant={color}>
                        <Link className="text-white text-decoration-none " to = {link}>GO!</Link>
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    </>)
}

export default MenuCard