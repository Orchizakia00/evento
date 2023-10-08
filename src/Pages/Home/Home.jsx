/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner/Banner";
import Service from "../../Components/Service/Service";
import customer1 from "../../assets/team-1.png"
import customer2 from "../../assets/team-2.png"
import customer3 from "../../assets/team-3.png"
import customer4 from "../../assets/team-6.png"

const Home = () => {

    const services = useLoaderData();

    return (
        <div>
            <Banner></Banner>

            {/* services section */}

            <h2 className="text-4xl font-bold text-center">Our Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 mx-auto">
                {
                    services.slice(0, 3).map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
            <div className="text-center mb-10">
                <Link to={'/services'}>
                    <button className="btn btn-info text-white">See all</button>
                </Link>
            </div>

            {/* upcoming events section */}

            <div className="my-20">
                <h2 className="text-4xl font-bold text-center mt-10 mb-20">Upcoming Events</h2>

                <div className="flex flex-col lg:flex-row w-full mx-auto justify-center">
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8"
                        data-aos="fade-right">
                        <h2 className="font-bold text-lg mb-2">Fitness Workshop</h2>
                        <p className="">This workshop will be lead by fitness experts covering various topics, including nutrition, workout routines, and mental well-being. You are cordially invited.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8 mt-2"
                        data-aos="fade-left">
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
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8"
                        data-aos="fade-right">
                        <h2 className="font-bold text-lg mb-2">Health and Wellness Retreats</h2>
                        <p className="">Organize rejuvenating retreats focused on fitness, wellness, and relaxation. We handle accommodations, activities, and mindful experiences.</p>
                    </div>
                    <div className="divider divider-horizontal"></div>
                    <div className="grid h-fit card bg-base-300 rounded-box place-items-center lg:w-1/4 p-8 mt-2"
                        data-aos="fade-left">
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

            {/* review section */}

            <h2 className="text-4xl font-bold text-center">Customer's Review</h2>
            <div className="mockup-window w-3/4 mx-auto my-10 border bg-base-300">
                <div className="flex flex-col justify-center px-4 py-10 bg-base-200">

                    <div data-aos="fade-up">
                        <h2 className="text-lg font-bold mb-2">Review: 1</h2>
                        <div className="flex gap-12">
                            <div className="">
                                <img src={customer1} className="rounded-full" alt="" />
                                <p className="text-center font-bold">Sarah</p>
                            </div>
                            <p className="flex items-center">
                                Participating in the fitness events organized by Evento was a game-changer for me! The atmosphere was electric, the trainers were inspiring, and the camaraderie among participants was fantastic. I achieved my fitness goals and made lifelong friends. Can't wait for the next event!
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <h2 className="text-lg font-bold mb-2 mt-6">Review: 2</h2>
                        <div className="flex gap-12">
                            <div className="">
                                <img src={customer2} className="rounded-full" alt="" />
                                <p className="text-center font-bold">Emily</p>
                            </div>
                            <p className="flex items-center">
                                I had the pleasure of attending the yoga retreat organized by Evento. It was a rejuvenating experience for the mind, body, and soul. The serene location, expert instructors, and delicious healthy meals made it a perfect escape. I returned home feeling refreshed and inspired. Thank you for this transformative experience!
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <h2 className="text-lg font-bold mb-2 mt-6">Review: 3</h2>
                        <div className="flex gap-12">
                            <div className="">
                                <img src={customer3} className="rounded-full" alt="" />
                                <p className="text-center font-bold">Michel</p>
                            </div>
                            <p className="flex items-center">
                                Being a part of Evento's fitness community has been incredible. The events are well-organized, inclusive, and cater to all fitness levels. Whether you're a beginner or a fitness enthusiast, you'll find something tailored for you. The encouragement and support from the organizers and fellow participants create a motivating environment. I've achieved fitness goals I never thought possible!
                            </p>
                        </div>
                    </div>

                    <div data-aos="fade-up">
                        <h2 className="text-lg font-bold mb-2 mt-6">Review: 4</h2>
                        <div className="flex gap-12">
                            <div className="">
                                <img src={customer4} className="rounded-full" alt="" />
                                <p className="text-center font-bold">Davis</p>
                            </div>
                            <p className="flex items-center">
                                I've attended multiple fitness events, but the ones by Evento stand out! The attention to detail, the variety of workouts, and the motivational speakers made the experience unforgettable. It's not just an event; it's a journey toward wellness and self-discovery. Highly recommended!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Home;