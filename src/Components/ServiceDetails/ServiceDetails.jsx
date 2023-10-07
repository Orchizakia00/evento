import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";

const ServiceDetails = () => {

    const [service, setService] = useState({});

    const services = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findService = services?.find(service => service.id === id);
        setService(findService);
    }, [id, services])

    return (
        <div>
            <DetailsCard service={service}></DetailsCard>
        </div>
    );
};

export default ServiceDetails;