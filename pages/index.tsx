import styled from 'styled-components'
import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
import Footer from '../elements/footer'

const Wrapper = styled.div`

`

export default function Home() {
  return (
    <Wrapper>
      <TitleTag title='home' />
      <Header />
      <Footer />
    </Wrapper>
  )
}
