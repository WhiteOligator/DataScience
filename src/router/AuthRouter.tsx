import { Routes, Route } from 'react-router-dom'
import { adminRoutes } from './router'

export const AuthRouter = () => {
  return (
    <Routes>
      {adminRoutes.map(route => (
        <Route
          {...route}
          element={<route.element />}
        />
      ))}
    </Routes>
  )
}
