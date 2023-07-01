import Inputs from '@/Guido/Inputs'
import Tables from '@/Guido/Tables'
import Layout from '@/Layout/Layout'
import { Grid } from '@mui/material'
import React from 'react'

const GuidoPage = () => {
  return (
    <Layout title='Guido'>
      <Inputs />
      <Grid mt={6}>
        <Tables />
      </Grid>
    </Layout>
  )
}

export default GuidoPage