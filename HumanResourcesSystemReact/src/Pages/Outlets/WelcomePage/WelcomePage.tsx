import { Container } from "react-bootstrap"
import { useUserInformations } from "../../../Hooks/useUserInformations";


function WelcomeUserPage(){

    const userInfo = useUserInformations()

    return(<>
        <Container className='d-flex justify-content-center align-items-center h-100'>
            <div className='display-6'>
                <p className='text-center'>Welcome {userInfo.userInfo?.name.concat(` ${userInfo.userInfo?.lastName}`)}</p>
                <p className='text-center'>in HRSystem</p>
            </div>
       </Container>
    </>
    )
}

export default WelcomeUserPage