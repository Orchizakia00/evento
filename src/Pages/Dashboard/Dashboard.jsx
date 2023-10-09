import { useEffect, useState } from "react";
import BookedCard from "../../Components/BookedCard/BookedCard";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {

    const services = useLoaderData();
    console.log(services);
    
    

    const [booked, setBooked] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {

        const bookedItems = JSON.parse(localStorage.getItem('booked'))

        if (bookedItems) {
            setBooked(bookedItems);
        }

        else {
            setNotFound("No Data Found");
        }

    }, [])

    const handleSeeAll = () => {
        setIsShow(true); // Show all items when the button is clicked
    };

    return (
        <div>
            {
                notFound ? <p className="h-[70vh] flex justify-center items-center">{notFound}</p> : (

                    <div className="h-fit grid grid-cols-1 md:grid-cols-1 mt-10 lg:grid-cols-2 gap-6 justify-center items-center  mx-auto mb-20">
                        {
                            isShow ?
                                booked?.map((service) => (
                                    <BookedCard key={service.id} service={service}></BookedCard>
                                ))
                                :
                                booked?.slice(0, 4).map(service => (
                                    <BookedCard key={service.id} service={service}></BookedCard>
                                ))
                        }
                    </div>

                )
            }
            {booked.length > 4 && !isShow && (
                <div className="pb-10 lg:mt-4">
                    <button
                        onClick={handleSeeAll}
                        className="p-4 rounded-md lg:my-4 bg-green-600 text-white btn normal-case block mx-auto"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default Dashboard;