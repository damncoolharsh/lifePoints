import React, { useContext } from 'react'
import { AuthContext } from './sources/Provider'
import Routes from './sources/Routes'
import AuthRoutes from './sources/AuthRoutes'

export default function App(){
  const {user} = useContext(AuthContext)
  console.log(user)
  return (
    user
    ? <Routes />
    : <AuthRoutes />
  )
}