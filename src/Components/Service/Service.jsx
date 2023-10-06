/* eslint-disable react/prop-types */

const Service = ({ service }) => {

    console.log(service);

    const { title, description, image } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;