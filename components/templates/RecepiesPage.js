import React from 'react';
import FoodCard from '../modules/recepies/FoodCard';

const RecepiesPage = ({data}) => {

    console.log(data)

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full flex flex-col items-center '>

                <h2 className='text-2xl'>foods</h2>
                {
                    data.map(food => 
                        <FoodCard key={food.id} foodData={food} />
                    )
                }
            </div>
        </div>
    );
};

export default RecepiesPage;