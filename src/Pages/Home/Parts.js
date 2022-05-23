import React, { useEffect, useState } from 'react';
import Part from './Part';

const Parts = () => {
    const [parts, setParts] = useState([]);
    useEffect(() => {
        fetch('parts.json')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])
    return (
        <div className='mb-20'>
            <h2 className='text-3xl font-bold text-center text-secondary my-5'>Parts Available</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    parts.slice(0, 3).map(part => <Part
                        key={part.id}
                        part={part}
                    >

                    </Part>)
                }
            </div>

        </div>
    );
};

export default Parts;