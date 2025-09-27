import React from 'react';
import PricingFeratur from '../PricingFeture/PricingFeratur';

const PricingCart = ({pricing}) => {
    const {name,price,information,popular} = pricing;
    return (
        <div className="card w-90 bg-base-100 shadow-sm ">
            <div className="card-body">
                <span className="badge badge-xs badge-warning">{popular}</span>
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">{price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    { 
                       pricing.features.map((feature, index) => <PricingFeratur
                        key={index} 
                        feature={feature}>
                        </PricingFeratur> ) 
                    }
                </ul>
                <p className='text-[16px] text-red-200 font-normal'>{information}</p>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default PricingCart;