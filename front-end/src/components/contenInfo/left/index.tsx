import { useEffect } from "react"
import { Container, Flag } from "./styles"
import { IInfoCountry } from "../../../common/types"

//it is getting the attributes from the IInfoCountry
const InfoLeftComp = ({data}: IInfoCountry) => {

    // This block of code will be executed when 
    //the component mounts or when 'data' changes.
    // we use to call this a "hook"
    useEffect(() => {

    }, [data])

    return (
        <Container>
            <Flag 
                src={data[0].flags.png}
                width={"250px"}
                height={"150px"}
            />            
        </Container>
    )

    
}

export default InfoLeftComp