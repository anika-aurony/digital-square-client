import React from 'react';
import { GiCheckMark } from "react-icons/gi";

const IndustryUseCases = () => {
    return (

        <section className="bg-white shadow-lg rounded-2xl p-6 my-10 py-10">
            <h2 className=" text-3xl font-bold text-center mb-10 "> Industry Use Cases</h2>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700  leading-relaxed pb-2">
                <li className="transition-transform duration-500 font-semibold  hover:-translate-y-3"><GiCheckMark className="inline text-rose-600 mr-1 -mt-1" /> Banks & FinTech: OTPs, transaction alerts</li>
                <li className="transition-transform duration-500 font-semibold  hover:-translate-y-3"><GiCheckMark className="inline text-rose-600 mr-1 -mt-1" /> E-commerce & Retail: Promotions, order notifications</li>
                <li className="transition-transform duration-500 font-semibold  hover:-translate-y-3"><GiCheckMark className="inline text-rose-600 mr-1 -mt-1" /> Healthcare & Education: Appointment reminders & announcements</li>
                <li className="transition-transform duration-500 font-semibold  hover:-translate-y-3"><GiCheckMark className="inline text-rose-600 mr-1 -mt-1" /> Government & Enterprises: Awareness campaigns</li>
                <li className="transition-transform duration-500 font-semibold  hover:-translate-y-3"><GiCheckMark className="inline text-rose-600 mr-1 -mt-1" /> Startups & SaaS: Onboarding, renewals & alerts</li>
            </ul>
        </section>

    );
};

export default IndustryUseCases;