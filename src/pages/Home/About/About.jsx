import office from '../../../assets/office.jpg'

const About = () => {
    return (
        <div className='mb-8'>
            <h3 className='text-3xl ms-12 mb-7 text-amber-500 italic'>Company Overview</h3>
            <div className='flex flex-col lg:flex-row mx-10 lg:justify-center gap-5'>
                <div className='p-4 mt-3'>
                    <p>Digital Square Limited, is an exciting new venture focused on networking devices. With unparalleled expertise and experience, we are transforming how people connect to the internet by offering top-quality products that ensure fast, reliable, and secure connections. Our state-of-the-art devices are designed to meet the needs of today&apos;s digital world and support the innovations of tomorrow. </p>
                    <p className='mt-5'>Join us in delivering seamless connectivity to homes and businesses everywhere.</p>
                </div>
                <div className=''>
                    <img src={office} alt="" className='w-10/12 mx-auto' />
                </div>
            </div>
        </div>
    );
};

export default About;