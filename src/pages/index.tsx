import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/main/layout'

const DynamicHomeHero = dynamic(() => import('../components/main/home/hero'))
const DynamicHomeSolution = dynamic(() => import('../components/main/home/solution'))
const DynamicHomeMarket = dynamic(() => import('../components/main/home/market'))
const DynamicHomePrivado = dynamic(() => import('../components/main/home/privados'))
const DynamicHomeInstitucional = dynamic(() => import('../components/main/home/institucionais'))
const DynamicHomeProduct = dynamic(() => import('../components/main/home/product'))


const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeSolution />
      <DynamicHomeProduct />
      <DynamicHomeMarket />
      <DynamicHomeInstitucional />
      <DynamicHomePrivado />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
