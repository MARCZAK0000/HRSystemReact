import { Button, Card } from "react-bootstrap"
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
                <Card.Title>{children}</Card.Title>
                <Card.Img style={{height: '300px'}} src={img}></Card.Img>
                <Card.Text>
                    {children}
                </Card.Text>
                <Button variant={color}>
                    <Link className="text-white text-decoration-none " to = {link}>GO!</Link>
                </Button>
            </Card.Body>
        </Card>
    </>)
}

export default MenuCard