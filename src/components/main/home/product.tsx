import React, { FC } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Image from 'next/image'


import { Typography } from '@mui/material'

const HomeProduct: FC = () => {

  return (
    <Box id="product" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <Image src="/images/pqhu.svg" width={800} height={678} quality={97} alt="hubmatch" />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ position: 'relative', fontSize: { xs: 36, md: 46 }, mt: { xs: 0, md: 8 }, mb: 4, fontWeight: 'bold' }}>
              Nosso{' '}
              <Box
                component="mark"
                sx={{
                  position: 'relative',
                  color: 'primary.main',
                  fontSize: 'inherit',
                  fontWeight: 'inherit',
                  backgroundColor: 'unset',
                }}
              >
                Produto{' '}
                <Box
                  sx={{
                    position: 'absolute',
                    top: { xs: 24, md: 34 },
                    left: 2,
                    transform: 'rotate(3deg)',
                    '& img': { width: { xs: 146, md: 170 }, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line */}
                  <img src="/images/headline-curve.svg" alt="Headline curve" />
                </Box>
              </Box>
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', lineHeight: 1, maxWidth: 500, wordBreak: 'break-word', py: 5, fontSize: { xs: 18, md: 18 } }}>
              {"Oferecemos serviços de suporte para startups através do MATCH, conectando empreendedores a investidores, mentores e cientistas. Com nossa plataforma, as startups têm a vantagem de economizar tempo, encontrando rapidamente a conexão e solução certa para sua ideia ou negócio."}
            </Typography>
          </Grid>

        </Grid>
      </Container>
    </Box>

  )
}

export default HomeProduct
