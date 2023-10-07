/* eslint-disable react/prop-types */

const Service = ({ service }) => {

    console.log(service);

    const { title, description, image } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" className="h-64 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-success normal-case w-full mt-4">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Service;