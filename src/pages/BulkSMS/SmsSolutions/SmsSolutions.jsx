import { MdFlare } from "react-icons/md";
const SmsSolutions = () => {
    return (
        <div >
            <section className="bg-gradient-to-r from-cyan-600 to-cyan-900 text-white shadow-lg rounded-2xl mt-5 p-6 my-10">
                <h2 className="text-3xl text-center font-boldbt-4 mb-10"> Our SMS Solution Offers</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Transactional SMS (24×7 High Priority)</li>
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Masking & Non-Masking</li>                    
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Promotional SMS (Marketing & Offers)</li>
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Lowest Price</li>
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> OTP / Service Explicit SMS</li>
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Locational Base SMS (Geo-Targeted Messaging)</li>
                    <li className='text-white text-lg font-semibold p-2'><MdFlare className="inline text-amber-400 -mt-1 mr-1" /> Online Payment (Real Time Update)</li>
                </ul>
            </section>
        </div>
    );
};

export default SmsSolutions;