import styled from 'styled-components'

interface StyledButtonInterface {
    case2:boolean
}

const StyledButton = styled.button<StyledButtonInterface>`
    font-size: 1rem;    
    font-weight: bold;    
    text-transform: uppercase;
    padding: 20px;
    border-radius: 5px;
    border: 0px;
    background: ${p=>p.case2 ? p.theme.colors.peach : 'white'};
    color: ${p=>p.case2 ? 'white' : p.theme.colors.black};
    cursor: pointer;
    outline: none;
    &:hover{
        background: ${p=>p.theme.colors.light_peach};
        color: white;
    }
`


interface ButtonInterface {
    content: string
    case2?: boolean
}

const Button:React.FC<ButtonInterface> = ({content, case2}) => {
    return (
        <StyledButton case2={case2}>
            {content}
        </StyledButton>
    )
}

export default Button
