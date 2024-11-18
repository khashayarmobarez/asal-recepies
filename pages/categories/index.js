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
        query: {
            difficulty,
            time
        }
    } = context

    const res = await fetch('http://localhost:5000/data')
    const data = await res.json();

    const filteredData = data.filter(item => {
        // For difficulty check
        const difficultyResult = difficulty ? 
            item.details.some(detail => detail.Difficulty === difficulty) : 
            true;

        // For time check
        const timeResult = time ? 
            item.details.some(detail => {
                const cookingTimeDetail = detail['Cooking Time'];
                if (!cookingTimeDetail) return false;
                
                const timeValue = parseInt(cookingTimeDetail.split(' ')[0]);
                
                if (time === 'less') {
                    return timeValue <= 30;
                } else if (time === 'more') {
                    return timeValue > 30;
                }
                return false;
            }) : 
            true;

        return difficultyResult && timeResult;
    });

    return {
        props: { data: filteredData }
    }
}