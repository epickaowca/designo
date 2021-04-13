import styled from 'styled-components'
import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
import Footer from '../elements/footer'
import HeroSection from '../components/home/heroSection'
import Designers from '../elements/designers'

const Wrapper = styled.div`

`

export default function Home() {
  return (
    <Wrapper>
      <TitleTag title='home' />
      <Header />
      <HeroSection />
      <Designers />
      <Footer />
    </Wrapper>
  )
}
