import React from 'react'
import Header from './features/Header'
import { Outlet } from 'react-router-dom'
const RouteLayout = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default RouteLayout