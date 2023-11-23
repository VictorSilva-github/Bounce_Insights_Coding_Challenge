import React, { useState } from "react"
import { Container } from "./styles"

interface IProps {
    setName: React.Dispatch<React.SetStateAction<any>>
}

const HeaderComp = ({ setName }: IProps) => {

    // useState hook to manage the state of the input field
    const [targetInput, setTargetInput] = useState<string>("")

    const handleSearch = () => {
        const trimmedInput = targetInput.trim();

        // Check if the trimmed input is not empty
        if (trimmedInput) {
            // Call the setName function with the trimmed input
            setName(trimmedInput);
        } else{
            // Display an alert if the trimmed input is empty
            alert("ERROR! - Please enter a valid country name.");
        }
    };

    return (
        <Container>
            {/* input field name of countries */}
            <input
                placeholder="Country Name"
                onChange={(e: any) => setTargetInput(e.target.value)}
            />
            <button onClick={handleSearch}>  
            {/* // button search that call the 'handleSearch' function */}
                Search
            </button>
        </Container>
    );
}

export default HeaderComp;