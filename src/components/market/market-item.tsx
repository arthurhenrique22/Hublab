import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Market } from '@/interfaces/market'

interface Props {
  item: Market
}

const MarketItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Box sx={{ mb: 2 }}>
        <Typography component="h2" variant="h4" sx={{ mb: 2 }}>
          {item.title}
        </Typography>
        <Typography sx={{ mb: 2, color: 'text.secondary' }}>{item.content}</Typography>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 2,
          py: 2,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 270,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            borderRadius: '50%',
            height: 52,
            width: 52,
            overflow: 'hidden',
            mr: 2,

            '& img': {
              width: '100%',
            },
          }}
        >

        </Box>

      </Box>
    </Box>
  )
}
export default MarketItem
