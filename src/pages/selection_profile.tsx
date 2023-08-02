import React from 'react'
import { NextPageWithLayout } from '@/interfaces//layout'
import { MainLayout } from '@/components/selection_profile/layout'
import dynamic from 'next/dynamic'


const DynamicHomeSelection = dynamic(() => import('../components/selection_profile/home/hero'))

const selection: NextPageWithLayout = () => {
    return (
        <>
            <DynamicHomeSelection />
        </>
    )
}

selection.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default selection
