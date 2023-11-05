import sun from '../assets/sun.svg'
import search from '../assets/search.svg'
import styled from 'styled-components'
import bell from '../assets/bell.svg'
import logo from '../assets/Ellipse 100.svg'

const Container = styled.div`
  grid-area: groupicon;
  display: flex;
  column-gap: calc(1vw + 5px);
  background-color: #24263a;
`

export const GroupElemtntHeader = () => {
  return (
    <Container>
      <img src={sun} />
      <img src={search} />
      <img src={bell} />
      <img src={logo} />
    </Container>
  )
}
