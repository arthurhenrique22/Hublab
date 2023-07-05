import React from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'

const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeSolution = dynamic(() => import('../components/home/solution'))
const DynamicHomeMarket = dynamic(() => import('../components/home/market'))
const DynamicHomePrivado = dynamic(() => import('../components/home/privados'))
const DynamicHomeInstitucional = dynamic(() => import('../components/home/institucionais'))
const DynamicHomeProduct = dynamic(() => import('../components/home/product'))
const DynamicHomeNews = dynamic(() => import('../components/home/news'))






const Home: NextPageWithLayout = () => {
  return (
    <>
      <DynamicHomeHero />
      <DynamicHomeSolution />
      <DynamicHomeProduct />
      <DynamicHomeMarket />
      <DynamicHomeInstitucional />
      <DynamicHomePrivado />
      <DynamicHomeNews />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
