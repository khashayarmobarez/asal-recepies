import { useRouter } from 'next/router';
import React from 'react';
import RecepieDetailsPageComp from '../../components/templates/RecepieDetailsPage';

const RecepieDetails = ({ data }) => {

    const router = useRouter();

    if (router.isFallback) {
        return <h2>loading page ...</h2>
    }
    
    return (
        <div className='w-full flex justify-center min-h-[70dvh]'>
            <RecepieDetailsPageComp data={data}  />
        </div>
    );
};

export default RecepieDetails;

export async function getStaticPaths() {
    const res = await fetch(`${process.env.BASE_URL}/data`)
    const json = await res.json()
    const data = json.slice( 1, 10 );

    const paths = data.map(food => ({params: {id: food.id.toString()}}))

    return {
        paths: paths,
        fallback: true,
    }
}


export async function getStaticProps(context) {
    const { params } = context;
    const res = await fetch(`${process.env.BASE_URL}/data/${params.id}`)
    const data = await res.json()


    return {
        props: { data },
        revalidate: +process.env.REVALIDATE
    };
}