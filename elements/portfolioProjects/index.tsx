import styled from 'styled-components'
import ProjectItem from './projectItem'

const Wrapper = styled.section`
    margin-top: 60px;
    ${p=>p.theme.media.tablet}{
        width: 90%;
        margin: 170px auto;
        max-width: 670px;
    }
    ${p=>p.theme.media.desktop}{
        max-width: 1500px;
        margin: auto;
        margin-top: 60px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

interface PortfolioProjectsInterface {
    projects: Array<{
        name?: string
        designName?: string
        description?: string
        empty?: boolean}>
}

const PortfolioProjects:React.FC<PortfolioProjectsInterface> = ({projects}) => {
    let howManyEmptyProjects = 3-projects.length%3
    if(howManyEmptyProjects===3) howManyEmptyProjects = 0
    const epmtyArr = new Array(howManyEmptyProjects).fill({empty: true})
    const projectsArr = [...projects, ...epmtyArr]
    return (
        <Wrapper>
            {projectsArr.map((item, index)=><ProjectItem key={index} name={item.name} designName={item.designName} description={item.description} empty={item.empty} photoname={item.photoname} />)}
        </Wrapper>
    )
}

export default PortfolioProjects
