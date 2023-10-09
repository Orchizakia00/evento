
import { useLoaderData, useParams } from "react-router-dom";
import swal from 'sweetalert';

const ServiceDetails = () => {

    const services = useLoaderData();
    const { id } = useParams();
    const service = services.find(service => service.id == id);
    console.log(service, id);

    const handleBook = () => {
        swal("Great!", "Your booking is confirmed!", "success");
    }


    return (
        <div className="my-10 mx-auto container w-3/4">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className="w-full" data-aos="fade-right"><img src={service.image} className="h-full" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-bold" data-aos="fade-up">{service.title}</h2>
                    <p data-aos="fade-up">{service.longDescription}</p>
                    <p className="my-4" data-aos="fade-up"><span className="font-bold">Price:</span> {service.price}</p>
                    <div className="card-actions justify-start">
                        <button onClick={handleBook} className="btn btn-success text-white" data-aos="fade-up">Book Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;