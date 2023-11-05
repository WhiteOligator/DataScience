import styled from 'styled-components'

const Container = styled.div`
  grid-area: mycard;
  width: 90%;
  height: 100%;
  flex-shrink: 0;
  background-color: #24263a;
  margin: 0;
  border-radius: 10px;
`

export const MyCard = () => {
  return <Container></Container>
}
