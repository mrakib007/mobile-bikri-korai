import React from 'react';
import phone1 from '../../../assets/images/phone1.jpg';
import SingleCard from './SingleCard';

const HomePageCards = () => {
    let cards = [
        {
            id: 1,
            title: "New Phones",
            img: phone1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
        },
        {
            id: 2,
            title: "New Phones",
            img: phone1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
        },
        {
            id: 3,
            title: "New Phones",
            img: phone1,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
        },
    ]
    return (
        <div>
            <h1>Our Categories</h1>
        <div className='grid gap-6 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cards.map(card=>
                    <SingleCard
                    key={card.id}
                    card={card}>
                    </SingleCard>
                )
            }
        </div>
        </div>
    );
};

export default HomePageCards;