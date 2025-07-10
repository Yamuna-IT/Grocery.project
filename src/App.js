import React from 'react'
import RouteLayout from './Ui/RouteLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './Ui/features/Header'
import Pages from './Ui/features/Pages'
import About  from './Ui/features/About'
const route = createBrowserRouter([{
  path:'/',
  element:<RouteLayout/>,
  children:[
    {index:true,element:<Header/>},
    {path: 'Pages', element:<Pages/>},
    {path: 'About', element:<About/>},
  ]
}])
const App = () => {
  return (
    <div>
      <RouterProvider router = {route}/>
    </div>
  )
}

export default App
