import dashboard from '../../assets/SideBar/pie-chart.svg'
import users from '../../assets/SideBar/users.svg'
import message from '../../assets/SideBar/message-square.svg'
import settings from '../../assets/SideBar/settings.svg'
import logout from '../../assets/SideBar/log-out.svg'
import { RoutesName } from '../../router/RoutesName'

export const sideBarListOne = [
  {
    img: dashboard,
    name: 'Daseboard',
    navigate: RoutesName.HOME,
  },
  {
    img: users,
    name: 'User profiles',
    navigate: RoutesName.USERS,
  },
  {
    img: message,
    name: 'Messages',
    navigate: RoutesName.MESSAGES,
  },
]

export const sideBarListTwo = [
  {
    img: settings,
    name: 'Settings',
    navigate: RoutesName.SETTINGS,
  },
]

export const sideBarListThree = [
  {
    img: logout,
    name: 'Log out',
  },
]
