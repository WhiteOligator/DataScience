import styled from 'styled-components'
import { GroupElemtntHeader } from '../components/GroupElemtntHeader'

const Container = styled.div`
  grid-area: header;
  align-items: center;
  display: grid;
  grid-template-areas: 'logo greeting groupicon';
  grid-template-columns: 180px 1fr 1fr;
  width: 100%;
  height: calc(7vh + 20px);
  background-color: #24263a;
  border-bottom: 2px solid #1d1e2c;
  text-align: center;
`

const Greetings = styled.p`
  grid-area: greeting;
  color: #dbdfea;
  background-color: #24263a;
  font-family: Gilroy;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`

const Logo = styled.p`
  grid-area: logo;
  color: #dbdfea;
  font-family: Roboto;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background-color: #24263a;
  margin: 0;
`

export const Header = () => {
  return (
    <Container>
      <Logo>Your Logo</Logo>
      <Greetings>Hello, Kriss</Greetings>
      <GroupElemtntHeader />
    </Container>
  )
}
