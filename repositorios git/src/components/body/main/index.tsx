import React from "react";
import { Container } from "./style"
import CardInput from "../../cardInput";
import Card from "../../card";
import { useState } from "react"
import { UserProps } from "./type";

const Main: React.FC = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    const [error, setError] = useState(false)

    const findUser = async(usuario: string) => {
        setError(false)
        setUser(null)
        const res = await fetch(`https://api.github.com/users/${usuario}`)

        const data = await res.json()

        if(res.status === 404){
            setError(true)
            return
        }

        const {avatar_url, login, name, following, followers} = data
        const userData: UserProps = {
            avatar_url,
            login,
            name,
            following,
            followers
        }
        setUser(userData)
    }

    return(
        <Container>
            <CardInput findUser={ findUser }/>
            {user && <Card imagem={user.avatar_url} usuario={user.login} nome={user.name} seguindo={user.following} seguidores={user.followers}/>}
            {error && <h2>Usuário não encontrado!</h2>}

        </Container>
    )
}

export default Main