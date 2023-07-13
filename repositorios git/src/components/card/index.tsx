import React from "react";
import { Container, Image, Name, User, Follow, Following, Followers, Info, Icon, Text} from "./style"
import People from "../../assets/Group.png"
import { CardProps } from "./type";

const Card: React.FC<CardProps> = (props) => {
    return(
        <Container>
            <Image src={props.imagem}/>
            <Info>
                <Name>Nome: {props.nome}</Name>
                <User>Usuário: {props.usuario}</User>
                <Follow>
                    <Following>
                        <Icon src={People}/>
                        <Text>Seguindo: {props.seguindo}</Text>
                    </Following>
                    <Followers>
                        <Icon src={People}/>
                        <Text>Seguidores: {props.seguidores}</Text>
                    </Followers>
                </Follow>
                
            </Info>
        </Container>
    )
}

export default Card