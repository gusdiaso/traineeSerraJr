import React from "react";
import { Container } from "./style"
import BannerMiddle from "../BannerMiddle/index";
import InfoMiddle from "../InfoMiddle/index";


const Contain: React.FC = () => {
    return(
        <Container>
            <BannerMiddle/>
            <InfoMiddle/>
        </Container>
    )
}

export default Contain