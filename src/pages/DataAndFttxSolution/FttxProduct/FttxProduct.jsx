import splicer from '../../../assets/fttx/Image Tumtec V3 Fully Automatic  Splicer Machine.jpg'
import otdr from '../../../assets/fttx/Image Multi-function Mini-OTDR.jpg'
import gpon from '../../../assets/fttx/image Trixon GPON OLT Transceiver .jpg'
import sfp from '../../../assets/fttx/image Trixon 10G SFP+ 20km   Transceiver  1310-1270nm .jpg'

const FttxProduct = () => {
    return (
        <div className='mb-8'>
            <h1 className="text-center text-2xl mt-7 font-medium text-orange-500">FTTx Related Products</h1>
            <h3 className='text-center mb-7'>~~~~~~~~</h3>
            <section className='flex w-4/5 mx-auto gap-5'>
                <div>
                    <img src={gpon} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400 ' />
                    <h1 className='mt-2 text-center  bg-orange-400 p-2'>Trixon GPON OLT</h1>
                </div>
                <div>
                    <img src={sfp} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>Trixon 10G SFP+</h1>
                </div>
                <div>
                    <img src={otdr} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>OTDR</h1>
                </div>
                <div>
                    <img src={splicer} alt="" className='border h-[250px] hover:scale-105 transition-all duration-400' />
                    <h1 className='mt-2 text-center bg-orange-400 p-2'>Tumtec Splicer Machine</h1>
                </div>
            </section>
        </div>
    );
};

export default FttxProduct;