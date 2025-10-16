import pic1 from "../../../../src/assets/onu/K-18.jpg"
import pic2 from "../../../../src/assets/onu/K-19.jpg"
import pic3 from "../../../../src/assets/onu/K-20.jpg"

const BestSellProduct = () => {
    return (
        <div>
            <h1 className="text-center text-2xl py-4 italic uppercase">Solutions</h1>
            <div className="flex w-5/6 mx-auto">
                <div className="card card-compact bg-base-100 w-96 shadow-xl m-2">
                    <figure>
                        <img
                            src={pic1}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ONU</h2>
                        <p>K-18</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact bg-base-100 w-96 shadow-xl m-2">
                    <figure>
                        <img
                            src={pic2}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ONU</h2>
                        <p>k-19</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral">Buy Now</button>
                        </div>
                    </div>
                </div><div className="card card-compact bg-base-100 w-96 shadow-xl m-2">
                    <figure>
                        <img
                            src={pic3}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">ONU</h2>
                        <p>K-20</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-neutral">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestSellProduct;