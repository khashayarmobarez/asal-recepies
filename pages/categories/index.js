import CategoriesPage from "../../components/templates/CategoriesPage";


const Categories = ({ data }) => {

    console.log(data)

    return (
        <div className="w-full flex flex-col items-center" >
            <CategoriesPage />
        </div>
    );
};b

export default Categories;


export async function getServerSideProps(context) {
    const {
        query : {
            difficulty,
            time
        }
    } = context

    const res = await fetch('http://localhost:5000/data')
    const data = await res.json();

    const filteredData = data.filter(item => {

        const difficultyResult =  item.details.filter(
            (details) => details.Difficulty && details.Difficulty
        )

        const timeResult = item.details.filter( (detail) => {
            const cookingTime = detail['Cooking time'] || "";
            const [timeDetails] = cookingTime.split(' ')
            if(time === 'less' && timeDetails && +timeDetails <= 30) {
                return detail;
            } else if (time === 'more' && +timeDetails > 30) {
                return detail;
            }
        })

        // check for the error
        if(time && difficulty && timeResult.length && difficultyResult.length) {
            return item
        } else if(!time && difficulty && difficultyResult.length) {
            return item
        } else if(time && !difficulty && timeResult.length) {
            return item
        }
    })

    return {
        props: {data: filteredData}
    }
}