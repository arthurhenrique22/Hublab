import React, { FC, useRef } from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Slider, { Settings } from 'react-slick'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import IconArrowBack from '@mui/icons-material/ArrowBack'
import IconArrowForward from '@mui/icons-material/ArrowForward'


import { data } from './product.data'
import { ProductItem } from '../product'
import { Typography } from '@mui/material'

interface SliderArrowArrow {
  onClick?: () => void
  type: 'next' | 'prev'
  className?: 'string'
}

const SliderArrow: FC<SliderArrowArrow> = (props) => {
  const { onClick, type, className } = props
  return (
    <IconButton
      sx={{
        backgroundColor: 'background.paper',
        color: 'primary.main',
        '&:hover': { backgroundColor: 'primary.main', color: 'primary.contrastText' },
        bottom: { xs: '-28px !important', md: '64px !important' },
        left: 'unset !important',
        right: type === 'prev' ? '90px !important' : '30px !important',
        zIndex: 10,
        boxShadow: 1,
      }}
      disableRipple
      color="inherit"
      onClick={onClick}
      className={className}
    >
      {type === 'next' ? <IconArrowForward sx={{ fontSize: 22 }} /> : <IconArrowBack sx={{ fontSize: 22 }} />}
    </IconButton>
  )
}

const StyledSlickContainer = styled('div')(() => ({
  position: 'relative',

  '& .slick-list': { marginLeft: '-30px', marginBottom: '24px' },
}))

const HomeProduct: FC = () => {
  const sliderRef = useRef(null)

  const sliderConfig: Settings = {
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <SliderArrow type="prev" />,
    nextArrow: <SliderArrow type="next" />,
  }

  return (
    <Box id="product" sx={{ pb: { xs: 6, md: 10 }, backgroundColor: 'background.paper' }}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6}>
            <StyledSlickContainer>
              <Slider ref={sliderRef} {...sliderConfig}>
                {data.map((item) => (
                  <ProductItem key={String(item.photo)} item={item} />
                ))}
              </Slider>
            </StyledSlickContainer>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="h2" sx={{ paddingInline: 5, position: 'relative', fontSize: { xs: 36, md: 46 }, mt: { xs: 0, md: 8 }, mb: 4, fontWeight: 'bold' }}>
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
                    '& img': { width: { xs: 146, md: 210 }, height: 'auto' },
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
