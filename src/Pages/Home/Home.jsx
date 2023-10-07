import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Service from "../../Components/Service/Service";

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl font-bold text-center">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto container">
                {
                    services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to={'/services'}>
                    <button className="btn btn-info">See all</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;