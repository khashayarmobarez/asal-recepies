import Link from "next/link";

const FoodCard = ({foodData}) => {

    const { id, name, price, details, discount } = foodData;


    return (
        <div className=" flex flex-col items-center m-4">
            <article className="card">
                <div className="temporary_text">
                    {/* <img src={`/images/${id}.jpeg`} alt={'image'} /> */}
                    Place image here
                </div>
                <div className="card_content">
                    <span className="card_title">{name}</span>
                    <span className="card_subtitle">
                    {
                        discount ?
                        <span>
                            {(price * (100 - discount) / 100)}
                        </span>
                        :
                        <span>
                            {price}
                        </span>
                    }
                    $
                    </span>
                    <p className="card_description">{details[0].Cuisine}</p>
                    <Link className="card_description" href={`/recepies/${id}`}>see details</Link>
                </div>
            </article>

            <style jsx>{`
                /* From Uiverse.io by eslam-hany */ 
                /* From Uiverse.io by Kemboi-Dun */ 
                .card {
                position: relative;
                width: 250px;
                height: 250px;
                color: #2e2d31;
                background: #131313;
                overflow: hidden;
                border-radius: 20px;
                }

                .temporary_text {
                font-weight: bold;
                font-size: 24px;
                padding: 6px 12px;
                color: #f8f8f8;
                }

                .card_title {
                font-weight: bold;
                }

                .card_content {
                position: absolute;
                left: 0;
                bottom: 0;
                    /* edit the width to fit card */
                width: 100%;
                padding: 20px;
                background: #f2f2f2;
                border-top-left-radius: 20px;
                    /* edit here to change the height of the content box */
                transform: translateY(150px);
                transition: transform .25s;
                }

                .card_content::before {
                content: '';
                position: absolute;
                top: -47px;
                right: -45px;
                width: 100px;
                height: 100px;
                transform: rotate(-175deg);
                border-radius: 50%;
                box-shadow: inset 48px 48px #f2f2f2;
                }

                .card_title {
                color: #131313;
                line-height: 15px;
                }

                .card_subtitle {
                display: block;
                font-size: 12px;
                margin-bottom: 10px;
                }

                .card_description {
                font-size: 14px;
                opacity: 0;
                transition: opacity .5s;
                }

                .card:hover .card_content {
                transform: translateY(0);
                }

                .card:hover .card_description {
                opacity: 1;
                transition-delay: .25s;
                }
            `}</style>

        </div>
    );
};

export default FoodCard;