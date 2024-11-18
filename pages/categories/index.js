import CategoriesPage from "../../components/templates/CategoriesPage";


const Categories = ({ data }) => {

    console.log(data)

    return (
        <div className="w-full flex flex-col items-center" >
            <CategoriesPage />
        </div>
    );
};

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
            (details) => details.Difficulty && details.Difficulty === difficulty
        )

        const timeResult = item.details.filter( (detail) => {
            const cookingTimeDetail = detail['Cooking time'] || "";
            
            if(time === 'less' && parseInt(cookingTimeDetail.split(' ')[0]) <= 30) {
                return detail;
            } else if (time === 'more' && parseInt(cookingTimeDetail.split(' ')[0]) > 30) {
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