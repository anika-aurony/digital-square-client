
const prices = [
    {
        type: "Non-Masking SMS",
        quantity: 1000,
        Rate: "0.35",
        Validity: "3 Months"
    },
    {
        type: "Non-Masking SMS",
        quantity: 5000,
        Rate: "0.32",
        Validity: "6 Months"
    },
    {
        type: "Non-Masking SMS",
        quantity: 10000,
        Rate: "0.30",
        Validity: "6 Months"
    }

]
const brandSMSPrices = [
    {
        type: "Masking SMS / Brand SMS",
        quantity: 1000,
        Rate: "0.60 + VAT",
        Validity: "3 Months"
    },
    {
        type: "Masking SMS / Brand SMS",
        quantity: 5000,
        Rate: "0.55 + VAT",
        Validity: "6 Months"
    },
    {
        type: "Masking SMS / Brand SMS",
        quantity: 10000,
        Rate: "0.50 + VAT",
        Validity: "6 Months"
    }
]

const SmsPrice = () => {
    return (
        <div className='my-12'>
            <h1 className='text-3xl font-bold text-center mb-10'>SMS Prices & Packages</h1>
            <div className='grid sm:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-8 sm:gap-4 md:gap-7 mx-8'>
                {prices.map((item, index) => (
                    <div
                        key={index}
                        className={`text-center pb-6 ${index === 1 ? "text-white" : "text-white"} shadow-md hover:scale-105 border transition
                        ${index === 1 ? "bg-gradient-to-r from-emerald-600 to-emerald-900" : "bg-gradient-to-r from-teal-600 to-teal-900"}`}
                    >
                        <div className="flex justify-center items-center py-10 font-bold text-2xl">
                            {item.type}

                        </div>
                        <div className='bg-amber-600 py-2 text-2xl font-semibold'>৳ {item.Rate} / <span className='text-lg'>SMS</span></div>
                        <div className='py-7 text-lg'>
                            <p><span className='font-bold pt-4'>Quantity :</span> {item.quantity}</p>
                            <p className="py-2"><span className='font-bold'>Validity :</span> {item.Validity}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 md:grid-cols-3 gap-8 mt-12 sm:gap-4 md:gap-7 mx-8'>
                {brandSMSPrices.map((item, index) => (
                    <div
                        key={index}
                        className={` text-center pb-6 ${index === 1 ? "text-white" : "text-white"} shadow-md hover:scale-105 border transition
                        ${index === 1 ? "bg-gradient-to-r from-teal-600 to-teal-900" : "bg-gradient-to-r from-emerald-600 to-emerald-900"} `}
                    >
                       
                        
                        <div className="flex justify-center items-center py-10 font-bold text-2xl">
                            {item.type}

                        </div>
                        <div className={`bg-yellow-600 py-2 text-2xl font-semibold`}>৳ {item.Rate} / <span className='text-lg'>SMS</span></div>
                        <div className='py-7 text-lg'>
                            <p><span className='font-bold pt-4'>Quantity :</span> {item.quantity}</p>
                            <p className="py-2"><span className='font-bold'>Validity :</span> {item.Validity}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default SmsPrice;