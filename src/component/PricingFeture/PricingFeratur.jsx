import { CheckCheck } from 'lucide-react';
import React from 'react';

const PricingFeratur = ({feature}) => {
    
    return (
        <p className='flex gap-2 items-center'> <CheckCheck></CheckCheck> {feature}</p>
    );
};

export default PricingFeratur;