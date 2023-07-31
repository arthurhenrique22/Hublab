import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'
import { Header } from '@/components/login/header'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      <Header />
      {children}
    </Box>
  )
}

export default MainLayout
