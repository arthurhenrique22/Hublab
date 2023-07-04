import React, { FC } from 'react'
import Grid from '@mui/material/Grid'

import { FooterSectionTitle } from '@/components/footer'


const FooterNavigation: FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={4}>
        <FooterSectionTitle title="Ondes estamos?" />
        Estamos embarcados no Porto Digital, reconhecido entre
        os principais parques tecnológicos e ambientes de inovação do Brasil.

      </Grid>
      <Grid item xs={12} md={6}>
        <FooterSectionTitle title="Fale com conosco" />
        Email: hublab.match@gmail.com
      </Grid>



    </Grid>
  )
}

export default FooterNavigation
