import { useQuery } from '@tanstack/react-query';
import React from 'react';
import phone1 from '../../../assets/images/phone1.jpg';
import SingleCard from './SingleCard';

const HomePageCards = () => {
    const {data: allCategories = []} = useQuery({
        queryKey: ['users'],
        queryFn: async () =>{
            const res = await fetch('https://y-9jemzp2tg-mrakib007.vercel.app/mobiles');
            const data = await res.json();
            return data;
        }
    })
    // let cards = [
    //     {
    //         id: 1,
    //         title: "New Phones",
    //         img: phone1,
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
    //     },
    //     {
    //         id: 2,
    //         title: "New Phones",
    //         img: phone1,
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
    //     },
    //     {
    //         id: 3,
    //         title: "New Phones",
    //         img: phone1,
    //         description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores eum temporibus nesciunt vero, sapiente id sequi tempore quidem maxime, eveniet aperiam iste excepturi, expedita eaque fuga ea illum deleniti repellendus!'
    //     },
    // ]
    return (
        <div className='max-w-[1200px] mx-auto'>
            <h1 className='text-5xl font-bold'>Our Categories</h1>
        <div className='grid gap-4 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                allCategories.map(category=>
                    <SingleCard
                    key={category.id}
                    category={category}>
                    </SingleCard>
                )
            }
        </div>
        </div>
    );
};

export default HomePageCards;