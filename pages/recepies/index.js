
import RecepiesPage from '../../components/templates/RecepiesPage';

const Menu = ({data}) => {
    return (
        <RecepiesPage data={data} />
    );
};

export default Menu;


export async function getStaticProps() {

    const res = await fetch('http://localhost:5000/data')
    const data = await res.json()


    return {
        props: {data},
        revalidate: 60 * 60 // half an hour
    }
}