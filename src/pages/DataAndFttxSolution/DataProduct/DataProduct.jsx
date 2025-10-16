import sfp from '../../../assets/data/SFP.jpg'
import opticalfiber from '../../../assets/data/Optical Fiber.jpg'
import patchcord from '../../../assets/data/patchcord.jpg'
import trixon from '../../../assets/data/Trixon_100G 10km_QSFP+_LR_Transceiver.jpg'

const DataProduct = () => {
    return (
        <div className='mx-auto mb-7'>
            <h1 className="text-center text-2xl my-6 text-orange-500">Related Products</h1>
            <section className='flex w-4/5 mx-auto gap-5'>
                <div>
                    <img src={sfp} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400 ' />
                    <h1 className='mt-2 text-center  bg-orange-400 p-2'>Trixon 10G SFP</h1>
                </div>
                <div>
                    <img src={trixon} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>Trixon SFP</h1>
                </div>
                <div>
                    <img src={patchcord} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>Patch Cord</h1>
                </div>
                <div>
                    <img src={opticalfiber} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>Optical Fiber</h1>
                </div>
            </section>
        </div>
    );
};

export default DataProduct;