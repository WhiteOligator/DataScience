import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons/faArrowUpLong'

const Container = styled.div`
  grid-area: balance;
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-color: #24263a;
  margin: 0;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const Block = styled.div<{ $justify?: string }>`
  display: flex;
  justify-content: ${props => props.$justify};
  align-items: center;
  width: 80%;
  height: 30%;
`

const Name = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 400;
  color: white;
  font-family: 'Times New Roman', Times, serif;
`

const Balance = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 800;
  color: white;
  font-family: 'Times New Roman', Times, serif;
`

const Interest = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: green;
  font-family: 'Times New Roman', Times, serif;
`

export const TotalBalance = () => {
  return (
    <Container>
      <Block
        $justify={'space-between'}
      >
        <Name>Total Balance</Name>
        <FontAwesomeIcon
          icon={faEllipsis}
          size="lg"
          style={{ color: '#ffffff', margin: '0' }}
        />
      </Block>
      <Block>
        <Balance>$ 19,570</Balance>
      </Block>
      <Block
        $justify={'flex-start'}
      >
        <FontAwesomeIcon
          icon={faArrowUpLong}
          style={{ color: 'green', margin: 0 }}
          size="xs"
        />
        <Interest>11.94%</Interest>
      </Block>
    </Container>
  )
}
