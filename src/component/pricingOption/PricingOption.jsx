import React, { use } from 'react';
import PricingCart from '../PricingCart/PricingCart';

const PricingOption = ({ PricingPromiss }) => {
    const PricingData = use(PricingPromiss);
    console.log(PricingData)
    return (
        <div className='mx-auto md:mr-6'>
            <h2>Get our Membership</h2>
            <div className='flex flex-wrap gap-2  md:ml-6'>
                {
                    PricingData.map(pricing => <PricingCart key={pricing.id} pricing={pricing}></PricingCart>)
                }
            </div>
        </div>
    );
};

export default PricingOption;