import TitleTag from './titleTag'
import Header from './header'
import Footer from './footer'
import HeroSection from './heroSection'
import Designers from './designers'
import PortfolioProjects from './portfolioProjects'


interface DesignPageGeneratorInterface {
    projectsArr: Array<{}>
    title: string
    heroSection: {header: string, paragraf: string}
    designCase: 'web' | 'app' | 'graphic'
}

const DesignPageGenerator:React.FC<DesignPageGeneratorInterface> = ({projectsArr, title, heroSection, designCase}) => {
    return (
        <>
            <TitleTag title={title} />
            <Header />
            <HeroSection designCase header={heroSection.header} paragraf={heroSection.paragraf} />
            <PortfolioProjects projects={projectsArr} />
            <Designers designCase={designCase} />
            <Footer />
        </>
    )
}

export default DesignPageGenerator
