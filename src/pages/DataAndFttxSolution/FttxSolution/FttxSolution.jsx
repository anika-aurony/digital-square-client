import FttxDiscussion from "../FttxDiscussion/FttxDiscussion";
import FttxProduct from "../FttxProduct/FttxProduct";
import SolutionBanner from "../SolutionBanner/SolutionBanner";


const FttxSolution = () => {
    return (
        <div>
            <SolutionBanner></SolutionBanner>
            <FttxDiscussion></FttxDiscussion>
            <FttxProduct></FttxProduct>
        </div>
    );
};

export default FttxSolution;