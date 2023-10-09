import { useLoaderData } from "react-router-dom";
import DiscountedServices from "../../Components/DiscountedServices/DiscountedServices";

const Discount = () => {

    const services = useLoaderData();

    const discountedServices = [3, 6, 5];

    return (
        <div>
            <div className="bg-base-200 h-[50vh] flex justify-center items-center flex-col">
                <div className="">
                    <h2 className="text-center font-bold text-4xl">Evento || Discounts</h2>
                </div>
                <p className="text-center mt-10 text-lg">You can avail upto <span className="font-bold text-cyan-600">65%</span> discount for these services. Confirm your booking!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto">
                {
                    services.filter(service => discountedServices.includes(service.id))
                        .map(service => <DiscountedServices key={service.id} service={service}></DiscountedServices>)
                }
            </div>
        </div>
    );
};

export default Discount;