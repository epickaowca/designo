import styled from 'styled-components'
import AdvantageItem  from './advantageItem'

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
    margin-bottom: -80px;
    & > div{
        margin: 50px 0px;
        &:first-child{
            margin-top: 0px;
        }
        &:last-child{
            margin-bottom: 0px;
        }
    }
    ${p=>p.theme.media.tablet}{
        margin-bottom: 0px;
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        margin: auto;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 100px;
        & > div{
            margin: 0px;
        }
    }
`

interface AdvantagesSectionInterface {
    propsName: Array<string>
    case2?:boolean
}

const AdvantagesSection:React.FC<AdvantagesSectionInterface> = ({propsName, case2}) => {
    let paragrafs = []
    if(!case2){
        paragrafs =
        [
            'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
            'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
            'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.'
        ]
    }
    return (
        <Wrapper>
            {propsName.map((item, index)=><AdvantageItem key={index} propsName={item} paragraf={paragrafs[index]} case2={case2}/>)}
        </Wrapper>
    )
}

export default AdvantagesSection
