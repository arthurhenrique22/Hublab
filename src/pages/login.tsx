import React from 'react'
import { NextPageWithLayout } from '@/interfaces//layout'
import { MainLayout } from '@/components/register/layout'
import dynamic from 'next/dynamic'


const DynamicHomeLogin = dynamic(() => import('../components/login/home/hero'))

const login: NextPageWithLayout = () => {
    return (
        <>
            <DynamicHomeLogin />
        </>
    )
}

login.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default login
