/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({ service }) => {

    console.log(service);

    const { title, description, image, id } = service;

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl"
            data-aos="flip-left">
            <figure><img src={image} alt="Shoes" className="h-64 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Link className="w-full" to={`/services/${id}`}>
                        <button className="btn btn-success normal-case w-full mt-4 text-white">Read More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;