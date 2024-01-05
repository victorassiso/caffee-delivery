import { Outlet } from 'react-router-dom'

import { Header } from '../components/header'

export function AppLayout() {
  return (
    <div className="m-auto flex max-w-[1440px] flex-col items-center">
      <Header />
      <Outlet />
    </div>
  )
}
