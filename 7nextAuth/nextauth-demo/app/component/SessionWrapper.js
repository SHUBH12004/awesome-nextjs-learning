"use client"
import { SessionProvider } from 'next-auth/react'
import React from 'react'
//session provider is a component that provides the session data to all child components.
// It wraps your app (or part of it) and makes the user's session data available to all child components.
// It is a wrapper component that provides the session data to all child components.
const SessionWrapper = ({children}) => {
  return ( 
   <SessionProvider>
    {children}
   </SessionProvider>
  )
}

export default SessionWrapper