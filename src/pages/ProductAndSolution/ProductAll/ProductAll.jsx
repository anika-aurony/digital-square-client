import axios from "axios";
import { useEffect, useState } from "react";
import DisplayProduct from "../../Home/DisplayProduct/DisplayProduct";
import DisplaySplicer from "../DisplaySplicer/DisplaySplicer";



const ProductAll = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);   
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    useEffect(() => {
        axios.get(`${baseURL}/products`)
            .then(res => {setProducts(res.data), setLoading(false) })
            .catch(err => console.error(err));
    }, [baseURL]);
    

    const onuFilters = products.filter(onuProduct => onuProduct.category == "ONU");
    const cleaverFilters = products.filter(cleaverProduct => cleaverProduct.category == "Fiber Cleaver");
    const splicerFilters = products.filter(splicerProduct => splicerProduct.category == "Fusion Splicer");
    const otdrFilters = products.filter(splicerProduct => splicerProduct.category == "OTDR");
    const sfpFilters = products.filter(sfpProduct => ["SFP", "SFP+", "QSFP", "QSFP+"].includes(sfpProduct.category));
    const ponFilters = products.filter(ponProduct => ponProduct.category == "OLT");
    const patchcordFilters = products.filter(patchcordProduct => patchcordProduct.category == "Patch Cords");
    
    if (loading) {
        return (
            <div className="flex justify-center items-center h-96">
                <span className="loading loading-spinner text-primary text-3xl"></span>
            </div>
        );
    }

    return (
        <div>
            {/* <h1 className="p-3">ONU</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    onuFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
            {/* <h1 className="p-3">Fusion Splicer</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    splicerFilters.reverse().map(product => <DisplaySplicer key={product.id}
                        product={product}>

                    </DisplaySplicer>
                    
                    )
                }
            </div>
            {/* <h1>Cleavers</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    cleaverFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
            {/* <h1>OTDR</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    otdrFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
            {/* <h1>OLT</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    ponFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
            {/* <h1>SFP</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {


                    sfpFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
            {/* <h1>Patch Cord</h1> */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mx-8'>
                {
                    patchcordFilters.map(product => <DisplayProduct key={product.id}
                        product={product}></DisplayProduct>
                    )
                }
            </div>
        </div>
    );
};

export default ProductAll;