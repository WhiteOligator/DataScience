import { AdminLayout } from '../layout/AdminLayout'
import { ErrorBoundary } from '../widgets/ErrorBoundary'
import styled from 'styled-components'
import { TotalBalance } from '../widgets/TotalBalance/TotalBalance'
import { TotalExpence } from '../widgets/TotalExpence/TotalExpence'
import { TotalSavings } from '../widgets/TotalSavings/TotalSavings'
import { Outlay } from '../widgets/Outlay/Outlay'
import { Income } from '../widgets/Income/Income'
import { LatestTransactions } from '../widgets/LatestTransactions/LatestTransactions'
import { MyCard } from '../widgets/MyCard/MyCard'
import { Anallytics } from '../widgets/Anallytics/Anallytics'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #171825;
  margin: 0;
  display: grid;
  grid-template-areas:
    'balance expence savings mycard'
    'outlay outlay outlay mycard'
    'outlay outlay outlay anallytics'
    'income income latestTransactions anallytics';
  grid-gap: 15px;
  grid-template-columns: 0.6fr 0.6fr 0.6fr 1fr;
  grid-template-rows: 1.6fr 1fr 2fr 3fr;
`

export const HomePage = () => {
  return (
    <AdminLayout>
      <Container>
        <TotalBalance />
        <TotalExpence />
        <TotalSavings />
        <Outlay />
        <Income />
        <LatestTransactions />
        <MyCard />
        <Anallytics />
      </Container>
    </AdminLayout>
  )
}
