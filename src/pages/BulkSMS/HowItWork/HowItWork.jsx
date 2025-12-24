

const HowItWork = () => {
    return (
        <div className='my-12'>
            <h2 className=" text-3xl text-gray-950 font-bold text-center mb-10  "> How It Works</h2>
            <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 my-14 pb-10">

                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-primary text-white flex items-center justify-center font-semibold shadow-lg p-3">
                        Upload contact list or API
                    </div>
                </div>

                {/* Line */}
                <div className="hidden lg:flex items-center">
                    <div className="w-24 h-1 bg-primary"></div>
                    <div className="text-primary text-3xl -mt-1 -ml-2 ">➤</div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-secondary text-white flex items-center justify-center font-semibold shadow-lg p-3">
                        Choose sender ID & message
                    </div>
                </div>

                {/* Line */}
                <div className="hidden lg:flex items-center">
                    <div className="w-24 h-1 bg-secondary"></div>
                    <div className="text-secondary text-3xl -mt-1 -ml-2">➤</div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-accent text-white flex items-center justify-center font-semibold shadow-lg p-3">
                        Send or schedule
                    </div>
                </div>

                {/* Line */}
                <div className="hidden lg:flex items-center">
                    <div className="w-24 h-1 bg-accent"></div>
                    <div className="text-accent text-3xl -mt-1 -ml-2">➤</div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                    <div className="w-28 h-28 rounded-full bg-info text-white flex items-center justify-center font-semibold shadow-lg p-3">
                        Monitor live status
                    </div>
                </div>

            </div>
        </div>


    );
};

export default HowItWork;