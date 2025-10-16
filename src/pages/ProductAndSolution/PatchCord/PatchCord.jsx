import { useEffect, useState } from "react";
import PatchCordDispaly from "../PatchCordDisplay/PatchCordDispaly";

const PatchCord = () => {
    const [patchcordProducts, setpatchcordProducts] = useState([]);
            
            useEffect(() => {
                fetch('../product.json')
                    .then(res => res.json())
                    .then(data => setpatchcordProducts(data))
            }, [])
            
            const patchcordFilters = patchcordProducts.filter(patchcordProduct => patchcordProduct.category== "Patch Cords");
            console.log(patchcordFilters);
    return (
        <div>
            {
                patchcordFilters.map(patchcordFilter => <PatchCordDispaly key = {patchcordFilter.id}
                        patchcordFilter ={patchcordFilter}></PatchCordDispaly>
                    )
            }
        </div>
    );
};

export default PatchCord;