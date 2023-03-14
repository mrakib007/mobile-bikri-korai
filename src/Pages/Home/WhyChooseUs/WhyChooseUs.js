import React from 'react';
import img1 from '../../../assets/images/reliable.jpg';
import img2 from '../../../assets/images/fast.jpg'
import img3 from '../../../assets/images/secured.jpg';
import SingleReason from './SingleReason';

const WhyChooseUs = () => {
    const reasons = [
        {
            id: 1,
            title: 'We are reliable',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod autem minima beatae earum consequatur. Deleniti facere quasi aspernatur perferendis?',
            img: img1
        },
        {
            id: 2,
            title: 'Easy and Fast',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod autem minima beatae earum consequatur. Deleniti facere quasi aspernatur perferendis?',
            img: img2
        },
        {
            id: 3,
            title: 'We Protect Your Info',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur quod autem minima beatae earum consequatur. Deleniti facere quasi aspernatur perferendis?',
            img: img3
        },
    ]
    return (
        <div className='max-w-[1210px] mx-auto mt-10 rounded-2xl' data-theme="business">
            <h1 className='text-5xl font-bold mt-5 mb-8 p-4'>Why Choose Us?</h1>
        {/* <div className='grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'> */}
        <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-3 grid-cols-1'>
            {
                reasons.map(reason =>
                    <SingleReason
                    key={reason.id}
                    reason={reason}></SingleReason>)
            }
        </div>
        </div>
    );
};

export default WhyChooseUs;