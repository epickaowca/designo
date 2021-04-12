import GetInTouch from './getInTouch'
import SecondLevel from './secondLevel'
import styled from 'styled-components'


const StyledFooter = styled.footer<FooterInterface>`
    ${p=>p.onlyFooter &&  `
    & > section{
        &:nth-child(1){
            display: none;
        }
    }
    `}
    display: flex;
    flex-direction: column;
`

export interface FooterInterface {
    onlyFooter?: boolean
}

const Footer:React.FC<FooterInterface> = ({onlyFooter}) => {
    return (
        <StyledFooter onlyFooter={onlyFooter}>
            <GetInTouch />
            <SecondLevel onlyFooter={onlyFooter} />
        </StyledFooter>
    )
}

export default Footer
