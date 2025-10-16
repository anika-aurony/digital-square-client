import { Link } from 'react-router-dom';
import datasolution from '../../../assets/data.jpg'
import fttx from '../../../assets/fttx.jpg'

const Solutions = () => {
    return (
        <div>
            <section className="text-center  mt-10">
                <h1 className="text-slate-400">-------------</h1>
                <h3 className="uppercase text-3xl font-medium text-orange-400 ">Solutions</h3>
                <h1 className="text-slate-400">~~~~~~~~~</h1>
                <p className="text-stone-500 text-sm">Dedicated to Fiber optical networking solutions to serve our customers all around</p>
            </section>
            <section className="flex flex-col lg:flex-row justify-center items-center lg:justify-evenly mt-10 mb-20 ">
                <div className="bottom-6 lg:bottom-0 card bg-base-100 w-96 shadow-xl md:mb-2 rounded-none hover:scale-105 transition-all duration-500">
                    <Link to="/datasolution">
                        <figure>
                            <img
                                src={datasolution}
                                alt="Shoes" />
                        </figure></Link>
                    <div className="card-body">
                        <h2 className="card-title">Data Center Solutions</h2>
                        <p>A data center solution encompasses the comprehensive infrastructure, technologies...</p>
                        <div className="card-actions justify-end">
                            <Link to='/datasolution'><button className="text-orange-400 btn btn-ghost"> See More...</button></Link>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-96 shadow-xl rounded-none hover:scale-105 transition-all duration-500">
                    <Link to='/fttxsolution'>
                        <figure>
                            <img
                                src={fttx}
                                alt="fttx"  />
                        </figure>
                    </Link>
                    <div className="card-body">
                        <h2 className="card-title">FTTx Solutions</h2>
                        <p>With the rapid deployment of FTTx and its global adoption, Digital Square provides... </p>
                        <div className="card-actions justify-end">
                            <Link to='/fttxsolution'><button className="text-orange-400 btn btn-ghost"> See More...</button></Link>
                        </div>
                    </div>
                </div>
            </section> 
        </div>
    );
};

export default Solutions;