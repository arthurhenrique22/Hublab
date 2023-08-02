import React, { FC, ReactNode } from 'react'
import Box from '@mui/material/Box'

interface Props {
  children: ReactNode
}

const MainLayout: FC<Props> = ({ children }) => {
  return (
    <Box component="main">
      {children}
    </Box>
  )
}

export default MainLayout
