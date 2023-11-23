import Button from '@mui/material/Button'; //material UI 

//react - button
interface IProps {
    variant: 'text' | 'outlined' | 'contained'
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
    title: string
    onClick: () => void
}

//responsable for the button comp
const ButtonComp = () => {
    return (
        <>
            <Button variant="contained">
            Contained
            </Button>
        </>
    )
}

export default ButtonComp