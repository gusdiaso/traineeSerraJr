import React from "react";
import { Container, Logo, Icon } from "./style"
import logoHeader from "../../assets/logoHeader.svg"
import icone from "../../assets/iconeMenu.svg"


const Header: React.FC = () => {
    return(
        <Container>
            <Logo src={logoHeader}/>
            <Icon src={icone}/>
        </Container>
    )
}

export default Header