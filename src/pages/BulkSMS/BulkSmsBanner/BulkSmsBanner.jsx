import banner from "../../../assets/bulkSmsBanner_original.jpg"

const BulkSmsBanner = () => {
    return (
        <div className="hero w-full mb-10">
            <div className="hero-content w-full p-0">
                <img
                    src={banner}
                    alt="Banner"
                    className="w-full h-[215px] sm:h-[330px] md:h-[375px] lg:h-[650px] 2xl:h-[850px] object-cover shadow-xl"
                    
                />
            </div>
        </div>
        
    )
};

export default BulkSmsBanner;