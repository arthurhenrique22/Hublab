import React, { FC } from 'react'
import Image from 'next/image'
import Box from '@mui/material/Box'

import { Institucionais } from '@/interfaces/institucionais'

interface Props {
  item: Institucionais
}

const InstitucionaisCardItem: FC<Props> = ({ item }) => {
  return (
    <Box
      sx={{
        px: 1,
        py: 3,
      }}
    >
      <Box
        sx={{
          p: 1,
          backgroundColor: 'background.paper',
          borderRadius: 4,
          transition: (theme) => theme.transitions.create(['box-shadow']),
          '&:hover': {
            boxShadow: 2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            lineHeight: 1,
            overflow: 'hidden',
            borderRadius: 3,
            height: 110,
            mb: 2,

          }}
        >
          <Image src={item.photo as string} width={185} height={130} alt={'Mentor ' + item.id} />
        </Box>
      </Box>
    </Box>
  )
}
export default InstitucionaisCardItem
