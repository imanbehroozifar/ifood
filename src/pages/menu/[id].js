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
    const req = await fetch(`${process.env.BASE_URL}/data`)
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
    const req = await fetch(`${process.env.BASE_URL}/data/${params.id}`);
    const data = await req.json();

    if (!data.id) {
        return {
            notFound: true,
        }
    }


    return {
        props: { data },
        revalidate: +process.env.REVALIDATE

    }

}