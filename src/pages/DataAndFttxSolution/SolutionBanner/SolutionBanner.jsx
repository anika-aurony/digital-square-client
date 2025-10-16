import BannerImg from '../../../assets/SolutionBanner1.jpg'

const SolutionBanner = () => {
    return (
        <div >
            <div className="carousel-item w-full h-[430px]">
                <img
                    src={BannerImg}
                    className="w-full opacity-90"
                    alt="Tailwind CSS Carousel component" />
            </div>
            <div className=' text-white absolute z-20 top-52 pl-20'>
                <h1 className='text-3xl font-medium'>Solution</h1>
                <h3 className='mt-3 text-xl'>To provide customers with high-quality products</h3>
            </div>

        </div>
    );
};

export default SolutionBanner;