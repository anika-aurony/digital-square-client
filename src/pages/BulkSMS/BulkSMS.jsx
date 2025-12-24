import { FaWhatsapp } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

const BulkSMS = () => {
    return (
        <div className="w-full">

            {/* ---------------- CTA ---------------- */}
            <section className="text-center text-gray-950 p-10">
                <h2 className="text-3xl font-bold mb-4"> Start Messaging Today with Digital Barta</h2>
                <p className="text-lg mb-6">
                    Boost your communication with affordable pricing, enterprise scalability, and instant connectivity.
                </p>

                <p className="font-semibold flex justify-center"><TfiEmail size={24} color="purple" className="me-3"/> Email: a2psms@digitalsquare.ltd</p>
                <p className="font-semibold flex justify-center py-3"> <MdLocalPhone size={24} color="blue" className="me-3" /> Phone: +8801332811580</p>
                <p className="font-semibold flex mb-6 justify-center"><FaWhatsapp size={24} color="green" className="me-3"/> WhatsAPP: +8801332811583</p>


                <button className="px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg shadow-lg text-lg transition">
                    Subscribe
                </button>

            </section>

        </div>
    );
};

export default BulkSMS;
