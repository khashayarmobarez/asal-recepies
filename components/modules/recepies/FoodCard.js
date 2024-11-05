import Link from "next/link";

const FoodCard = ({foodData}) => {

    const { id, name, price, details, discount } = foodData;


    return (
        <div className=" flex flex-col items-center  my-20">
            {/* <img src={`/images/${id}.jpeg`} alt={'image'} /> */}
            <div className="card">
                <p className="heading">
                    {name}  
                </p>
                <p>
                    {details[0].cuisine}
                </p>
                <p>
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
                </p>
                {
                    discount > 0 &&
                    <p>{discount}%</p>
                }
                <Link href={`/recepie/${id}`}>see details</Link>
            </div>

            <style jsx>{`
                .card {
                position: relative;
                width: 190px;
                height: 254px;
                background-color: #000;
                display: flex;
                flex-direction: column;
                justify-content: end;
                padding: 12px;
                gap: 12px;
                border-radius: 8px;
                cursor: pointer;
                }

                .card::before {
                content: '';
                position: absolute;
                inset: 0;
                left: -5px;
                margin: auto;
                width: 200px;
                height: 264px;
                border-radius: 10px;
                background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
                z-index: -10;
                pointer-events: none;
                transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                .card::after {
                content: "";
                z-index: -1;
                position: absolute;
                inset: 0;
                background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
                transform: translate3d(0, 0, 0) scale(0.95);
                filter: blur(20px);
                }

                .heading {
                font-size: 20px;
                text-transform: capitalize;
                font-weight: 700;
                }

                .card p:not(.heading) {
                font-size: 14px;
                }

                .card p:last-child {
                color: #e81cff;
                font-weight: 600;
                }

                .card:hover::after {
                filter: blur(30px);
                }

                .card:hover::before {
                transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
                }
            `}</style>

        </div>
    );
};

export default FoodCard;