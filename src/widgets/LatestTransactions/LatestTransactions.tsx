import styled from 'styled-components'

const Container = styled.div`
  grid-area: latestTransactions;
  width: 100%;
  height: 90%;
  flex-shrink: 0;
  background-color: #24263a;
  margin: 0;
  border-radius: 10px;
`

export const LatestTransactions = () => {
  return <Container></Container>
}
