import React, { useState } from 'react';
import useParts from '../../hooks/useParts';
import PurchaseModal from './PurchaseModal';
import Purchases from './Purchases';
const Purchase = () => {
    const [parts, setParts] = useParts();
    const [purchase, setPurchase] = useState(null);
    return (
        <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center text-secondary my-5'>Parts Available</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.map(part => <Purchases
                        key={part._id}
                        part={part}
                        setPurchase={setPurchase}
                    >

                    </Purchases>)
                }
            </div>
            {
                purchase && <PurchaseModal
                    purchase={purchase}
                    setPurchase={setPurchase}

                >

                </PurchaseModal>
            }

        </div>
    );
};

export default Purchase;