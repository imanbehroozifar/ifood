import MenuPage from '@/components/templates/MenuPage/MenuPage'
import React from 'react'

const Menu = ({ data }) => {
    return (
        <MenuPage data={data} />
    )
}

export default Menu

export async function getStaticProps() {

    const request = await fetch(`${process.env.BASE_URL}/data`)
    const data = await request.json();
    return {
        props: { data },
        revalidate: +process.env.REVALIDATE
    }
}