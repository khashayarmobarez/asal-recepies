
import RecepiesPage from '../../components/templates/RecepiesPage';

const Menu = ({data}) => {
    return (
        <RecepiesPage data={data} />
    );
};

export default Menu;


export async function getStaticProps() {

    const res = await fetch(`${process.env.BASE_URL}/data`)
    const data = await res.json()


    return {
        props: {data},
        revalidate: +process.env.REVALIDATE
    }
}