import { FaDumbbell, FaTrophy, FaUsers  } from 'react-icons/fa';


const About = () => {
    return (
        <div className="my-10">
            <div className="bg-base-200 h-[50vh] flex items-center justify-center">
                <h2 className="text-center font-bold text-4xl">Evento || About Us</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
                <div>
                    <FaDumbbell className='mx-auto mb-4 w-[50px] h-[50px]'></FaDumbbell>
                    <h1 className="text-2xl font-bold text-center mb-6">Our Passion for Fitness Events</h1>
                    <p>
                        At Evento, we are driven by our passion for fitness events. Our team of dedicated professionals curates experiences that challenge limits and inspire unity. We believe in the power of fitness to transform lives and communities, fostering motivation and accomplishment in every event we organize.
                    </p>
                </div>
                <div>
                    <FaUsers  className='mx-auto mb-4 w-[50px] h-[50px]'></FaUsers >
                    <h1 className="text-2xl font-bold text-center mb-6">Commitment to Community Wellness</h1>
                    <p>
                        We are committed to community wellness, crafting events that nurture both the body and mind. Our inclusive approach welcomes participants of all ages and fitness levels. From serene yoga retreats promoting mindfulness to energetic fitness challenges, our events cater to diverse aspects of wellness, promoting a holistic sense of well-being.
                    </p>
                </div>
                <div>
                    <FaTrophy className='mx-auto mb-4 w-[50px] h-[50px]'></FaTrophy>
                    <h1 className="text-2xl font-bold text-center mb-6">Experience Unmatched Professionalism</h1>
                    <p>
                        Choose Evento for unparalleled professionalism and expertise. Our experienced team meticulously plans every detail, ensuring seamless logistics and exceptional attendee experiences. Whether it is a charity run, a health expo, or a team-building fitness challenge, trust us to handle your event with creativity, precision, and a deep passion for success.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;