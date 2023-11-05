import styled from 'styled-components'
import { sideBarListOne, sideBarListThree, sideBarListTwo } from './SideBarNavigation'
import { Link, useNavigate } from 'react-router-dom'

const Container = styled.div`
  grid-area: sidebar;
  height: calc(93vh - 42px);
  width: 100%;
  background-color: #24263a;
  margin: 0;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 20px;
  align-items: flex-end;
`
const Stroke = styled.div`
  margin: 0;
  text-align: center;
  display: flex;
  align-items: center;
  column-gap: 20px;
  width: 163px;
  height: 25px;
  color: white;
  font-family: Gilroy;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border-radius: 100px 0px 0px 100px;
  background-color: #24263a;
  cursor: default;
  text-decoration: none;

  &:hover {
    background-color: #1d1e2c;
  }
`
const Line = styled.div`
  width: 140px;
  height: 1px;
  background: #1d1e2c;
`

export const SideBar = () => {
  return (
    <Container>
      {sideBarListOne.map(el => (
        <Link
          to={el.navigate}
          style={{ textDecoration: 'none', margin: '0' }}
        >
          <Stroke>
            <img
              src={el.img}
              style={{ margin: '0', marginLeft: '20px' }}
            />
            {el.name}
          </Stroke>
        </Link>
      ))}
      <Line />
      {sideBarListTwo.map(el => (
        <Link
          to={el.navigate}
          style={{ textDecoration: 'none', margin: '0' }}
        >
          <Stroke>
            <img
              src={el.img}
              style={{ margin: '0', marginLeft: '20px' }}
            />
            {el.name}
          </Stroke>
        </Link>
      ))}
      <Line />
      {sideBarListThree.map(el => (
        <Stroke>
          <img
            src={el.img}
            style={{ margin: '0', marginLeft: '20px' }}
          />
          {el.name}
        </Stroke>
      ))}
    </Container>
  )
}
