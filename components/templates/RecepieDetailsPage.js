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
        <div className=' flex flex-col w-[90%] items-start gap-y-4'>
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
                    {details.map((detail, index) => 
                        <li key={index} className='flex gap-x-1'>
                            <p>{Object.keys(detail)[0]}: </p>
                            <span>{Object.values(detail)[0]}</span>
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <h4>ingredients</h4>
                <ul>
                    {ingredients.map((item, index) => 
                        <li key={index} className='flex gap-x-1'>
                            {item}
                        </li>
                    )}
                </ul>
            </div>

            <div>
                <h4>Recepie</h4>
                <ul className='w-full flex flex-col items-center'>
                    {recipe.map((item, index) => 
                        <li key={index} className={`w-full p-4 flex gap-x-4 ${index % 2 ? 'bg-softPink' : 'bg-wineRed' }`}>
                            <p>{index + 1}</p>
                            <p>{item}</p>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    );
};

export default RecepieDetailsPageComp;