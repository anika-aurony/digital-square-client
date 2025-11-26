import {  FaHeadset, FaIdBadge, FaGlobe, FaChartLine, FaRoute, FaLanguage, FaMapMarkedAlt, } from "react-icons/fa";

const features = [
    {
        icon: <FaIdBadge className="text-rose-600 text-4xl text-center mb-4 w-full" />,
        title: "Branded Sender ID (Masking Support)",
        desc: "Your company name appears as the sender",
    },
    {
        icon: <FaGlobe className="text-green-600 text-4xl text-center mb-4 w-full" />,
        title: "Web Portal & API (REST/SMPP)",
        desc: "Send manually or integrate with your platform",
    },
    {
        icon: <FaChartLine className="text-amber-600 text-4xl text-center mb-4 w-full" />,
        title: "Real-Time Delivery Reports (DLR)",
        desc: "Track every message accurately",
    },
    {
        icon: <FaRoute className="text-teal-600 text-4xl text-center mb-4 w-full" />,
        title: "Transactional, Promotional & OTP Routes",
        desc: "Optimized routing based on message type",
    },
    {
        icon: <FaLanguage className="text-cyan-600 text-5xl text-center mb-4 w-full" />,
        title: "Bangla SMS Supported",
        desc: "Send SMS in Bangla (Unicode & Non Unicode)",
    },
    {
        icon: <FaMapMarkedAlt className="text-green-600 text-4xl text-center mb-4 w-full" />,
        title: "Geo Location Based",
        desc: "Send SMS based on specific area",
    },
    {
        icon: <FaHeadset className="text-purple-600 text-4xl text-center mb-4 w-full" />,
        title: "24/7 Technical Support",
        desc: "Always available when you need us",
    },
];

const Features = () => {
    return (
        <div>
            <section className="p-6 md:p-10">
                <h2 className="text-3xl font-bold text-center mb-10">Why Choose <span className='text-orange-600'>Digital Barta</span></h2>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="card text-center bg-white shadow-md hover:shadow-xl border rounded-xl p-6 transition"
                        >
                            <div className=" mb-4">
                                {item.icon}
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                            </div>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Features;