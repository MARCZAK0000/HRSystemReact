import { Container } from "react-bootstrap";

export default function ErrorContainer(ErrorCode: number|undefined){
    return (<>
        <Container className = "text-center">
            {ErrorCode === 400 &&
                <h2>There is a problem with request</h2>}
            
            {ErrorCode === 401 &&
                <h2>There is a problem with access token</h2>}

            {ErrorCode === 403 &&
                <h2>Action is forbidden</h2>}

            {ErrorCode === 404 &&
                <h2>Response from server is not found</h2>}

            {ErrorCode === 500 &&
                <h2>There is a problem with server</h2>}
        </Container>
    </>)
}