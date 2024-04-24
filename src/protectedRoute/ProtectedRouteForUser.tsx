/* eslint-disable react/prop-types */
import { Navigate } from "react-router"
import React from "react"

export const ProtectedRouteForUser = ({children}) => {
    const user:any = JSON.parse(localStorage.getItem('users')|| 'null')
    if (user?.role === "user") {
      return children
    }
    else {
      return <Navigate to={'/login'}/>
    }
} 