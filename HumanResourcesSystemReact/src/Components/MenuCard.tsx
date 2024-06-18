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
        <Card className="w-75">
            <Card.Body className="w-100">
                <Card.Title className="text-center">{children}</Card.Title>
                <Card.Img style={ {height: '300px'}} src={img}></Card.Img>
                <Card.Text className="text-center">
                    {children}
                </Card.Text>
                <Container className="text-center">
                    <Link className="text-white text-decoration-none " to = {link}>
                        <Button className="btn-lg" variant={color}>
                            GO!
                        </Button>
                    </Link>
                </Container>
            </Card.Body>
        </Card>
    </>)
}

export default MenuCard