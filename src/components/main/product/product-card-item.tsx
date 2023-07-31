import React, { FC } from 'react'
import Box from '@mui/material/Box'
import { Product } from '@/interfaces/product'
import Image from 'next/image'


interface Props {
  item: Product
}

const ProductItem: FC<Props> = ({ item }) => {
  return (
    <Box sx={{ padding: '30px' }}>
      <Box
        sx={{
          boxShadow: 1,
          borderRadius: 1,
          px: 1,
          py: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          width: 500,
          backgroundColor: 'background.paper',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            height: 52,
            width: 100,
            overflow: 'hidden',
            mr: 2,

            '& img': {
              width: '100%',
            },
          }}
        >
        </Box>
        <Image src={item.photo as string} width={300} height={600} alt={'img'} />
      </Box>
    </Box>
  )
}
export default ProductItem
