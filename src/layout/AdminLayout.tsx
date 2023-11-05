import styled from 'styled-components'
import { Header } from './Header'
import { SideBar } from './SideBar/SideBar'

const Layout = styled.div`
  width: 100%;
  display: grid;
  grid-template-areas:
    'header header'
    'sidebar content';
  grid-template-columns: 180px 1fr;
`
const Content = styled.div`
  grid-area: content;
  margin: 0;
`

interface AdminLayoutProps {
  children: JSX.Element | JSX.Element[];
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <SideBar />
      <Content>{children}</Content>
    </Layout>
  )
}
