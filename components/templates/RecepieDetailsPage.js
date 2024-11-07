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
        <div className=' flex flex-col w-[90%]'>
            <Image src={'/images/${id}.jpeg'} alt={name} />
            <h3>{name}</h3>
            <p>{introduction}</p>
        </div>
    );
};

export default RecepieDetailsPageComp;