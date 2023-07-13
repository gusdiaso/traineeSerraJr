import React from "react";
import { Container, Input , Image } from "./style"
import Lupa from "../../assets/Search.png"
import { SearchProps } from "./type"
import { useState } from "react"

const CardInput:React.FC<SearchProps> = ({findUser}) => {
    const [userName, setUserName] = useState("")

    return(
        <Container>
            <Input placeholder="Procure pelo usuário" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value)}/>
            <Image src={Lupa} alt="Lupa" onClick={() => findUser(userName)}></Image>
        </Container>
    )
}

export default CardInput