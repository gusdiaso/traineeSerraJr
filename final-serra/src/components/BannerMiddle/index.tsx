import React from "react";
import { Container, Banner, Text } from "./style"
import imageBanner from "../../assets/banner.svg"

const BannerMiddle: React.FC = () => {
    return(
        <Container>
            <Banner src={imageBanner}/>
            <Text>Como atuamos</Text>
        </Container>
    )
}

export default BannerMiddle