import styled from 'styled-components'

const Container = styled.div`
  grid-area: income;
  width: 100%;
  height: 90%;
  flex-shrink: 0;
  background-color: #24263a;
  margin: 0;
  border-radius: 10px;
`

export const Income = () => {
  return <Container></Container>
}
