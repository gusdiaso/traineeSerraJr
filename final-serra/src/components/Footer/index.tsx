import React from "react";
import { Container, InfoContato, Text, LogoEmpresa, Contato, Line, Icone } from "./style"
import Logo from "../../assets/logoFooter.svg"
import logoIntagram from "../../assets/logoInstagram.svg"
import logoContato from "../../assets/logoContato.svg"
import logoTrabalhe from "../../assets/logoTrabalheConosco.svg"



const Footer: React.FC = () => {
    return(
        <>
            <Container>
                <LogoEmpresa src={Logo}/>
                <Contato>
                    <InfoContato>
                        <Icone src={logoIntagram}/>
                        <Text>Instagram</Text>
                    </InfoContato>
                    <InfoContato>
                        <Icone src={logoContato}/>
                        <Text>Contato</Text>
                    </InfoContato>
                    <InfoContato>
                        <Icone src={logoTrabalhe}/>
                        <Text>Trabalhe Conosco</Text>
                    </InfoContato>
                </Contato>
            </Container>
            <Container>
                <Line/>
            </Container>
            <Container>
                <Text>© Serra Jr. Engenharia 2023</Text>
                <Text>Todos os direitos reservados</Text>
            </Container>
        </>
    )
}

export default Footer