import Image from 'next/image';
import React from 'react';

const RecepieDetailsPageComp = ({data}) => {

    const { 
        id,
        name,
        price,
        discount,
        introduction,
        details,
        ingredients,
        recipe
    } = data

    return (
        <div className=' flex flex-col w-[90%] items-center'>
            {/* <Image src={`/images/${id}.jpeg`} alt={name} /> */}
            <div className='w-full flex flex-col' id='banner'>
                <h3>{name}</h3>
                <p>{details[0].Cuisine}</p>
                <p>{}</p>
            </div>

            <div id='introduction' className='w-full flex flex-col'>
                <p>{introduction}</p>
            </div>

            <div id='details' className='flex flex-col items-center'>
                <h2>Details</h2>
                <ul>
                    {details.map((details, index) => 
                        <li key={index}>test</li>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default RecepieDetailsPageComp;