import React, { FC, } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

import { Logo } from '@/components/login/logo'


const Header: FC = () => {


  return (
    <Box sx={{ backgroundColor: 'background.paper' }}>
      <Container sx={{ py: { xs: 2, md: 3 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo />
          <Box sx={{ ml: 'auto', display: { xs: 'inline-flex', md: 'none' } }}>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
