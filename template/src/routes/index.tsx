import React from 'react'
import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/page/home'
const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <Home />
  }
]

const Router = () => {
  const appRouter = useRoutes(routesConfig)
  return appRouter
}

export default Router
