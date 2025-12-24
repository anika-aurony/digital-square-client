import banner from "../../../assets/DigitalBartaBulkSMS.jpg"

const BulkSmsBanner = () => {
    return (
        <div className="hero w-full mb-10">
            <div className="hero-content w-full p-0">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-[160px] sm:h-[230px] md:h-[250px] lg:h-[420px] 2xl:h-[450px] object-cover shadow-xl"
                    
                />
            </div>
        </div>
        
    )
};

export default BulkSmsBanner;