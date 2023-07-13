import React from "react";
import { Container, Image, Info, Title, Subtitle, Text } from "./style"
import Banner from "../../assets/contentMineiracao.svg"

const InfoMiddle: React.FC = () => {
    return(
        <Container>
            <Image src={Banner}/>
            <Info>
                <Subtitle>Especialização</Subtitle>
                <Title>A ARTHMS fornece serviços independentes no mundo todo, que fazem a diferença nas vidas das pessoas.</Title>
                <Text>Nossos especialistas internacionais o auxiliam a operar de forma mais eficiente e sustentável, aprimorando processos, melhorando a qualidade e produtividade, reduzindo riscos, verificando conformidade e agilizando a chegada de suas mercadorias ao mercado. Nossas principais atividades de serviço abrangem todos os setores da indústria, atingindo os produtos e serviços que os consumidores confiam no dia a dia em qualquer lugar do mundo.</Text>
            </Info>
        </Container>
    )
}

export default InfoMiddle