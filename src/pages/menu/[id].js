import DetailsPage from '@/components/templates/DetailsPage/DetailsPage'
import { useRouter } from 'next/router'
import React from 'react'

const Details = ({ data }) => {
    const router = useRouter()
    if (router.isFallback) {
        return <h2>Loading Page ...</h2>
    }
    return (
        <DetailsPage data={data} />
    )
}

export default Details

export async function getStaticPaths() {
    const req = await fetch('http://localhost:4000/data')
    const json = await req.json();
    const data = json.slice(0, 10);
    const paths = data.map(food => ({ params: { id: food.id.toString() } }))
    return {
        paths,
        fallback: true,
    }

}
export async function getStaticProps(context) {
    const { params } = context;
    const req = await fetch(`http://localhost:4000/data/${params.id}`);
    const data = await req.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }


    return {
        props: { data },
        revalidate: 10, // S 

    }

}