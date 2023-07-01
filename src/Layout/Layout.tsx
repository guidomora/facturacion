import NavBar from '@/Components/NavBar'
import { Grid } from '@mui/material'
import Head from 'next/head'
import { title } from 'process'
import React, { FC, ReactNode } from 'react'


interface Props {
    title: string
    children: ReactNode
}


const Layout:FC<Props> = ({title, children}) => {
  return (
    <Grid>
        <Head>
            <title>{title}</title>
        </Head>
        <NavBar />
        <main>
            {children}
        </main>
    </Grid>
  )
}

export default Layout