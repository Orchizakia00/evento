import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Service/Service";

const Services = () => {

    const services = useLoaderData();

    return (
        <div className="my-10">
            <div className="bg-base-200 h-[50vh] flex items-center justify-center">
                <h2 className="text-center font-bold text-4xl">Evento || Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;