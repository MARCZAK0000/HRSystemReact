import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"

type MenuCardType = {
    children: React.ReactNode,
    link: string,
    color: string
}

const MenuCard = ({children, link, color}: MenuCardType) =>{
    return(<>
        <Card>
            <Card.Body>
                <Card.Text>
                    {children}
                </Card.Text>
                <Button variant={color}>
                    <Link to = {link}></Link>
                </Button>
            </Card.Body>
        </Card>
    </>)
}

export default MenuCard