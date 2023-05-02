import MenuPage from '@/components/templates/MenuPage/MenuPage'
import React from 'react'

const Menu = ({ data }) => {
    return (
        <MenuPage data={data} />
    )
}

export default Menu

export async function getStaticProps() {
    
    const request = await fetch('http://localhost:4000/data')
    const data = await request.json();
    return {
        props: { data },
        revalidate:10, //s
    }
}