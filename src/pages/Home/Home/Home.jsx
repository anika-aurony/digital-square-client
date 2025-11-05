import About from "../About/About";
import Banner from "../Banner/Banner";
import ShowProduct from "../ShowProduct/ShowProduct";
import Solutions from "../Solutions/Solutions";



const Home = () => {
    return (
        <div className="mt-8">
            <Banner></Banner>
            <ShowProduct></ShowProduct>
            <Solutions></Solutions>
            <About></About>
        </div>
    );
};

export default Home;