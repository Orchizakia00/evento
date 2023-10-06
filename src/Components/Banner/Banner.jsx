import slider2 from '../../assets/slider-2.jpeg'

const Banner = () => {
    return (
        <div className="hero min-h-screen my-10"
            style={{
                backgroundImage: `url(${slider2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content">
                <div className='text-center'>
                    <h1 className="text-5xl font-bold text-white">Transform Your Body, Transform Your Life!!</h1>
                    <p className="py-6 text-white ">
                        Discover expert-led workouts, tailored training plans, and nutritious recipes. Whether you are a beginner or an enthusiast, we are here to guide you. Join our community, embrace a healthier lifestyle, and unlock your potential. Start your fitness journey today
                    </p>
                    <button className="btn btn-info normal-case">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;