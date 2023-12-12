'use client'
import React, { useEffect, useState } from 'react'
import Item from '@/app/types/item'
import { usePriceContext } from '../contexts/filtered-price-state';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function DisplayItems() {
    const router = useRouter();
    const { price } = usePriceContext();
    const [items, setItems] = useState<Item[]>([]);
    useEffect(() => {
        const getItemsList = async () => {
            const response = await fetch("/api/display-items");
            const data = await response.json();
            console.log("This is the getAllItems", data);
            setItems(data);
        };
        getItemsList();
    }, []);

    const handleItemClick = (id: string) =>{
        router.push(`/pages/view-item?id=${id}`)
    }

    return (
        <div>
            {items ?
                <>
                    <div className='flex flex-wrap h-full  '>
                        {items.map((item, index) => (
                            <>
                                {price > item.price ? 
                                <>
                                    <button onClick={() => handleItemClick(item.id)} key={index} className='' >
                                        <div className=' bg-gray-400 h-80 mt-10 mr-2'>
                                            <img src={item.listImageUrl[0]} height={247} width={247} />
                                            <div className='text-white p-2'>
                                                <p>{item.name}</p>
                                                <p>CAD {item.price}</p>
                                            </div>
                                        </div>
                                    </button>
                                </>: 

                                <>
                                    
                                </>}
                                
                            </>

                        ))}
                    </div>
                </> : <>...Loading</>
            }
        </div>
    )
}
