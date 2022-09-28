import React from 'react';
import { useEffect, useState } from 'react';
import Break from '../Break/Break';
import Items from '../Items/Items';
import Question from '../Question/Question';
import './Kitchen.css'

const Kitchen = () => {
    const [items, setItems] = useState([])
    const [breakArea, setBreakArea] = useState([])

    useEffect(() => {
        fetch('items.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    const handleAddToList = (items) => {
        setBreakArea([...breakArea, items])
        // console.log(breakArea)
    }
    return (
        <div className='items-wrapper'>
            <h1>Dhaka Kitchen</h1>
            <h3>Select Your Items</h3>
            <div className='items-container'>
                <div className='all-item'>
                    {
                        items.map(item => <Items
                            item={item}
                            key={item.id}
                            handleAddToList={handleAddToList}
                        ></Items>)
                    }
                </div>
                <div className="break">
                    <Break
                        breakArea={breakArea}
                    ></Break>
                </div>
            </div>
            <Question></Question>
        </div>
    );
};

export default Kitchen;