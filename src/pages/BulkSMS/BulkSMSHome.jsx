import BulkSMS from './BulkSMS';
import BulkSmsBanner from './BulkSmsBanner/BulkSmsBanner';
import Description from './Description/Description';
import Features from './Features/Features';
import HowItWork from './HowItWork/HowItWork';
import IndustryUseCases from './IndustryUseCases/IndustryUseCases';
import SmsSolutions from './SmsSolutions/SmsSolutions';
import SmsPrice from './SmsPrice/SmsPrice';


const BulkSMSHome = () => {
    return (
        <div className='mt-20 md:mx-12 lg:mx-0 bg-base-100 '>
            <BulkSmsBanner></BulkSmsBanner>
            <div className='mx-4 sm:mx-6 md:mx-auto max-w-full sm:max-w-3xl md:max-w-6xl'>                
                <Description></Description>
                <Features></Features>
                <IndustryUseCases></IndustryUseCases>
                <HowItWork></HowItWork>
                <SmsPrice></SmsPrice>
                <SmsSolutions></SmsSolutions>
                <BulkSMS></BulkSMS>
            </div>

        </div>
    );
};

export default BulkSMSHome;