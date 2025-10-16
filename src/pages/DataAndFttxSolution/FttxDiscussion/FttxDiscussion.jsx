import fttximg from '../../../assets/fttxbanner.jpg'

const FttxDiscussion = () => {
    return (
        <div>
            <h1 className="text-2xl text-center mt-6 mb-4 text-orange-400 font-medium"> FTTx Solution</h1>
            <div className="px-12 ">
                <h3>With the rapid deployment of FTTx and its global adoption, Digital Square provides comprehensive end-to-end infrastructure solutions for central office (CO), optical distribution networks (ODN), and last-mile architecture. <br /> Digital Square offers a wide range of optical fiber products and fully customizable EPON and GPON solutions, tailored to meet the unique needs of next-generation networks. Their modular and scalable product designs not only address current requirements but also ensure cost-effective support for future demands, enabling seamless adaptability for evolving lifestyles.</h3>
                <img src={fttximg} alt=""  className='w-1/2 mx-auto rounded-2xl my-8' />
            </div>
        </div>
    );
};

export default FttxDiscussion;