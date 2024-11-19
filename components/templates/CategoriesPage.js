import Image from "next/image"
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FoodCard from "../modules/recepies/FoodCard";

// assets
import foodPickupAnimation from '../../assets/SearchForFood.svg'


const CategoriesPage = ({data}) => {

    const router = useRouter('')

    console.log(data)

    const [query, setQuery] = useState({difficulty: '', time: ''})

    useEffect(() => {
        const { difficulty, time } = router.query;

        if(query.difficulty !== difficulty || query.time !== time) {
            setQuery ({difficulty, time })
        }
    },[]);

    const changeHandler = e => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }

    const searchHandler = () => {
        
        router.push({
            pathname: '/categories',
            query: query
        });
    }

    return (
        <div className="min-h-[50dvh] flex flex-col">
            <h2>Categories</h2>
            <div className="w-full flex flex-col">
                <select value={query.difficulty} name="difficulty" onChange={changeHandler}>
                    <option value=''>difficulty</option>
                    <option value='Easy'>easy</option>
                    <option value='Medium'>medium</option>
                    <option value='Hard'>hard</option>
                </select>
                <select value={query.time} name="time" onChange={changeHandler}>
                    <option value=''>cooking time</option>
                    <option value='less'>less than 30 min</option>
                    <option value='more'>more than 30 min</option>
                </select>
                <button onClick={searchHandler}>search</button>
                {
                    !data.length && <Image src={foodPickupAnimation} alt="searchFood" className="my-20" />
                }
                <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
                    { data.map((cardData) => 
                        <FoodCard id={cardData.id} foodData={cardData} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoriesPage;