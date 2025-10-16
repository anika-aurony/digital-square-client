import React from "react";
import {  FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";

const BulkSMS = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-10 px-5 md:px-20">
            {/* Header Section */}
            <div className="text-center mb-10">
                <h1 className="text-3xl md:text-4xl font-bold text-orange-500 mb-3">
                    📩 Bulk SMS Solutions
                </h1>
                <p className="text-gray-700 max-w-3xl mx-auto">
                    Empower your business communication with fast, reliable, and scalable Bulk SMS service by{" "}
                    <span className="font-semibold text-gray-900">Digital Square Ltd.</span>
                </p>
            </div>

            {/* What is Bulk SMS */}
            <section className="bg-white shadow-lg rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">What is Bulk SMS?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Bulk SMS enables businesses to send large volumes of messages instantly to their customers. Whether you need to send
                    promotions, alerts, OTPs, or reminders, Digital Square Ltd. ensures high-speed delivery with 99% uptime and complete
                    compliance.
                </p>
            </section>

            {/* Why Choose Us */}
            <section className="bg-orange-50 shadow-md rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">🚀 Why Choose Digital Square Ltd.?</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr className="bg-orange-200 text-gray-800">
                                <th>Feature</th>
                                <th>Benefit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Branded Sender ID (Masking Support)</td>
                                <td>Your company name appears as the sender</td>
                            </tr>
                            <tr>
                                <td>Web Portal & API (REST/SMPP) Access</td>
                                <td>Send manually or integrate with your platform</td>
                            </tr>
                            <tr>
                                <td>Real-Time Delivery Reports (DLR)</td>
                                <td>Track every message accurately</td>
                            </tr>
                            <tr>
                                <td>High Deliverability – DND & Non-DND Routes</td>
                                <td>Reach maximum customers without failure</td>
                            </tr>
                            <tr>
                                <td>Transactional, Promotional & OTP Routes</td>
                                <td>Optimized routing based on message type</td>
                            </tr>
                            <tr>
                                <td>24/7 Technical Support</td>
                                <td>Always available when you need us</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Industry Use Cases */}
            <section className="bg-white shadow-lg rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">💼 Industry Use Cases</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li><MdCheckCircle className="inline text-orange-400" /> Banks & FinTech: OTPs, transaction alerts</li>
                    <li><MdCheckCircle className="inline text-orange-400" /> E-commerce & Retail: Promotions, order notifications</li>
                    <li><MdCheckCircle className="inline text-orange-400" /> Healthcare & Education: Appointment reminders & announcements</li>
                    <li><MdCheckCircle className="inline text-orange-400" /> Government & Enterprises: Awareness campaigns</li>
                    <li><MdCheckCircle className="inline text-orange-400" /> Startups & SaaS: Onboarding, renewals & alerts</li>
                </ul>
            </section>

            {/* How It Works */}
            <section className="bg-orange-50 shadow-md rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">📊 How It Works</h2>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                    <li>Upload your contact list or connect via API</li>
                    <li>Choose sender ID & message content</li>
                    <li>Send instantly or schedule campaigns</li>
                    <li>Monitor delivery status live from dashboard</li>
                </ol>
            </section>

            {/* Our SMS Solutions */}
            <section className="bg-white shadow-lg rounded-2xl p-6 mb-10">
                <h2 className="text-2xl font-semibold text-orange-500 mb-4">✅ Our SMS Solutions</h2>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                    <li><MdCheckCircle className="inline text-green-500" /> Transactional SMS (24×7 High Priority)</li>
                    <li><MdCheckCircle className="inline text-green-500" /> Promotional SMS (Marketing & Offers)</li>
                    <li><MdCheckCircle className="inline text-green-500" /> OTP / Service Explicit SMS</li>
                    <li><MdCheckCircle className="inline text-green-500" /> Locational Base SMS (Geo-Targeted Messaging)</li>
                </ul>
            </section>

            {/* Contact Section */}
            <section className="text-center bg-gradient-to-r from-orange-300 to-orange-500 text-white rounded-2xl p-10 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold mb-3">
                    📞 Start Messaging Today with Digital Square Ltd.
                </h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Boost your communication with affordable pricing, enterprise scalability, and instant connectivity.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3">
                    <p className="flex items-center gap-2"><FaEnvelope /> sales@digitalsquare.ltd</p>
                    <p className="flex items-center gap-2"><FaPhoneAlt /> +88 01713035618</p>
                </div>
            
                <a
                    href="https://isms.digitalsquare.ltd"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn btn-warning mt-6 text-white font-semibold shadow-md hover:scale-105 transition-all duration-300">
                        Login to SMS Portal
                    </button>
                </a>
            </section>
        </div>
    );
};

export default BulkSMS;
