import { useRouter } from "next/router";
import { useState } from "react";


const CategoriesPage = () => {

    const router = useRouter('')

    const [query, setQuery] = useState({difficulty: '', time: ''})

    const changeHandler = e => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }

    const searchHandler = () => {
        // Only adding parameters that have values
        const cleanQuery = Object.fromEntries(
            Object.entries(query).filter(([_, value]) => value !== '')
        );
        
        router.push({
            pathname: '/categories',
            query: cleanQuery
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
            </div>
        </div>
    );
};

export default CategoriesPage;