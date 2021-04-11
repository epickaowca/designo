import GetInTouch from './getInTouch'
import SecondLevel from './secondLevel'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
`

const Footer = () => {
    return (
        <StyledFooter>
            <GetInTouch />
            <SecondLevel />
        </StyledFooter>
    )
}

export default Footer
