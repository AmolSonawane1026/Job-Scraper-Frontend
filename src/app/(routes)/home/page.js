
import HomeAfter from '@/components/Home/HomeAfter'
import ProtectedRoute from '@/components/ProtectedRoute'
import React from 'react'

const page = () => {
  return (
    <>
       <ProtectedRoute>
       <HomeAfter/>
       </ProtectedRoute>
    </>
  )
}

export default page
