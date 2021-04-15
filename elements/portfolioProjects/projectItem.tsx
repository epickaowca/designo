import styled from 'styled-components'
import Image from 'next/image'

type WrapperType = {empty:boolean}

const Wrapper = styled.div<WrapperType>`
cursor: pointer;
${p=>p.empty && `visibility: hidden; display: none!important`};
overflow: hidden;
border-radius: 15px;
max-width: 350px;
margin: 75px auto;
&:hover{
    opacity: .7;
}
${p=>p.theme.media.tablet}{
    display: flex;
    max-width: unset;
}
${p=>p.theme.media.desktop}{
    ${p=>p.empty && `display: block!important`};
        display: block;
        max-width: 350px;
        margin: 30px 0px;
        max-width: 30%;
    }
`

const StyledArticle = styled.article`
    min-height: 180px;
    background: #FDF3F0;
    padding: 45px;
    text-align: center;
    & > h1{
        margin-bottom: 15px;
        letter-spacing: 5px;
        font-weight: 500;
        color: ${p=>p.theme.colors.peach};
        text-transform: uppercase;
    }
    & > p{
        ${p=>p.theme.colors.black};
    }
    ${p=>p.theme.media.tablet}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        & > h1{
            font-size: 1.5rem;
        }
    }
    ${p=>p.theme.media.desktop}{
        min-height: 193px;
    }
`

interface ProjectItemInterface {
    designName?: string
    name?: string
    description?: string
    empty?: boolean
    photoname?:string
}

const ProjectItem:React.FC<ProjectItemInterface> = ({name, description, designName, empty, photoname}) => {
    return (
        <Wrapper empty={empty}>
            <Image src={`/assets/${designName}-design/desktop/image-${photoname ? photoname : name}.jpg`} width={700} height={640} alt={empty ? '' : 'portfolioApp'} />
            <StyledArticle>
                <h1>{name}</h1>
                <p>{description}</p>
            </StyledArticle>
        </Wrapper>
    )
}

export default ProjectItem
