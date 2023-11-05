import { AdminLayout } from '../layout/AdminLayout'
import { DashBoardWidget } from '../widgets/DashBoardWidget'

export const HomePage = () => {
  return (
    <AdminLayout>
      <DashBoardWidget />
    </AdminLayout>
  )
}
