import styled from 'styled-components'
import TitleTag from '../elements/titleTag'
import Header from '../elements/header'
const Wrapper = styled.div`

`

export default function Home() {
  return (
    <Wrapper>
      <TitleTag title='home' />
      <Header />
    </Wrapper>
  )
}