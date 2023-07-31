import React from 'react'
import { NextPageWithLayout } from '@/interfaces//layout'
import { MainLayout } from '@/components/register/layout'
import dynamic from 'next/dynamic'


const DynamicHomeRegister = dynamic(() => import('../components/register/home/hero'))



const register: NextPageWithLayout = () => {
    return (
        <>
            <DynamicHomeRegister />
        </>
    )
}

register.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default register
