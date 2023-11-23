import { TextField } from "@mui/material" //material UI

interface IProps {
    id: string
    label: string
    variant: 'outlined' | 'standard' | 'filled'
    color: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

//text field input
const InputComp = () => {
    return (
        <>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </>
    )
}

export default InputComp