import { Container } from "react-bootstrap"

export const Footer = ()=>{
    return(
   <Container fluid className="border-top">
        <div className="d-flex flex-wrap justify-content-between  align-items-center py-2">
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary">© 2023 HR-System, Inc</span>
            </div>
    
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex pe-3">
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-facebook fs-2"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-github fs-2"></i></a></li>
                <li className="ms-3"><a className="text-body-secondary" href="#"><i className="bi bi-instagram fs-2"></i></a></li>
            </ul>
      </div>
   </Container>
  )
}

export default Footer