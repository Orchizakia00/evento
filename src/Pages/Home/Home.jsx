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
                    <button className="btn btn-info text-white">See all</button>
                </Link>
            </div>

            <div className="my-20">
                <h2 className="text-4xl font-bold text-center mt-10 mb-20">Upcoming Events</h2>

                <div className="flex flex-col lg:flex-row w-full mx-auto justify-center">
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8">
                        <h2 className="font-bold text-lg mb-2">Fitness Workshop</h2>
                        <p className="">This workshop will be lead by fitness experts covering various topics, including nutrition, workout routines, and mental well-being. You are cordially invited.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8 mt-2">
                        <ul>
                            <li><span className="font-bold">Location: </span>Dhaka</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Date: </span>12 Oct, 2023</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Time: </span>4 PM</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Seats: </span>30</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Ticket: </span>$12</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full mx-auto justify-center mt-8">
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8">
                        <h2 className="font-bold text-lg mb-2">Health and Wellness Retreats</h2>
                        <p className="">Organize rejuvenating retreats focused on fitness, wellness, and relaxation. We handle accommodations, activities, and mindful experiences.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8 mt-2">
                        <ul>
                            <li><span className="font-bold">Location: </span>Jashore</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Date: </span>17 Oct, 2023</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Time: </span>7 PM</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Seats: </span>25</li>
                            <hr className="w-1/2" />
                            <li><span className="font-bold">Ticket: </span>$17</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;