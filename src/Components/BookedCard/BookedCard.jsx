/* eslint-disable react/prop-types */



const BookedCard = ({ service }) => {

    console.log(service);

    const { title, description, image, id } = service;
    console.log(service);


    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
            <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        </div>
    );
};

export default BookedCard;