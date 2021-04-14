import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
import Footer from '../elements/footer'
import HeroSection from '../elements/heroSection'
import Designers from '../elements/designers'
import PortfolioProjects from '../elements/portfolioProjects'

export default function Home() {
  const friendlyArr = [
    {name:'blogr', description: 'Blogr is a platform for creating an online blog or publication', designName: 'web'},
    {name:'blogr', description: 'Blogr is a platform for creating an online blog or publication', designName: 'web'},
    {name:'blogr', description: 'Blogr is a platform for creating an online blog or publication', designName: 'web'},
    {name:'blogr', description: 'Blogr is a platform for creating an online blog or publication', designName: 'web'},
]
  return (
    <>
      <TitleTag title='web design' />
      <Header />
      <HeroSection designCase header='Web Design' paragraf='We build websites that serve as powerful marketing tools and bring memorable brand experiences.' />
      <PortfolioProjects projects={friendlyArr} />
      <Designers designCase='web' />
      <Footer />
    </>
  )
}
