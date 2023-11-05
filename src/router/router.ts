import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { UserPage } from '../pages/UserPage'
import { RoutesName } from './RoutesName'
import { MessagePage } from '../pages/MessagePage'
import { SettingsPage } from '../pages/SettingsPage'

export const publicRoutes = [
  { element: LoginPage, path: RoutesName.LOGIN, exact: true, key: 'LoginPage' },
  { element: NotFoundPage, path: RoutesName.NOT_FOUND, exact: true, key: 'NotFoundPage' },
]

export const adminRoutes = [
  { element: LoginPage, path: RoutesName.LOGIN, exact: true, key: 'LoginPage' },
  { element: HomePage, path: RoutesName.HOME, exact: true, key: 'HomePage' },
  { element: UserPage, path: RoutesName.USERS, exact: true, key: 'UserPage' },
  { element: MessagePage, path: RoutesName.MESSAGES, exact: true, key: 'Messages' },
  { element: SettingsPage, path: RoutesName.SETTINGS, exact: true, key: 'Settings' },
  { element: NotFoundPage, path: '*', exact: true, key: 'NotFoundPage' },
]
