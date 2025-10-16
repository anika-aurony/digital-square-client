import datacenter from '../../../assets/datacenter.jpg'

const Discussion = () => {
    return (
        <section>
            <h1 className="text-2xl text-center mt-6 mb-4 text-orange-400 font-medium"> Data Center Solution</h1>
            <div className="px-10 ">
                <h4>A data center solution encompasses the comprehensive infrastructure, technologies, and services designed to support the storage, management, and processing of data for businesses and organizations. These solutions cater to the growing demands for high-speed, secure, and reliable data handling in today&apos;s digital world. How to construct a large and medium-sized data centre with high reliability, easy manageability and good expandability is the biggest challenge for data centre contractuction and operation.</h4>
                <img src={datacenter} alt=""  className='w-1/3 mt-3 mx-auto rounded-2xl' />
            </div>
        </section>
        
    );
};

export default Discussion;