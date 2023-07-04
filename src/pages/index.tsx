import IndexInputs from '@/Components/IndexInputs';
import IndexTable from '@/Components/IndexTable';
import Layout from '@/Layout/Layout'
import { Grid } from '@mui/material';
import { Inter } from 'next/font/google'



const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  return (
    <Layout title="Facturacion">
      <IndexInputs />
      <IndexTable />
    </Layout>
  )
}
