import DataProduct from "../DataProduct/DataProduct";
import Discussion from "../Discussion/Discussion";
import SolutionBanner from "../SolutionBanner/SolutionBanner";


const DataSolution = () => {
    return (
        <div>
            <SolutionBanner></SolutionBanner>
            <Discussion></Discussion>
            <DataProduct></DataProduct>
        </div>
    );
};

export default DataSolution;