import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
import Footer from '../elements/footer'
import HeroSection from '../elements/heroSection'
import Designers from '../elements/designers'
import AdvantagesSection from '../elements/advantagesSection'


export default function Home() {
  return (
    <>
      <TitleTag title='home' />
      <Header />
      <HeroSection header='Award-winning custom designs and digital branding solutions' paragraf='With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.' />
      <Designers />
      <AdvantagesSection propsName={['passionate', 'resourceful', 'friendly']} />
      <Footer />
    </>
  )
}
