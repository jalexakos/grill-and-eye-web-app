import React, { useState, useEffect } from 'react';

import MenuItem from '../../MenuItem/MenuItem';

const TraditionalBreakfasts = props => {

    const [ tradBreakfasts, setTradBreakfasts ] = useState([]);

    useEffect(() => {
        fetch("/traditional-breakfasts")
        .then((res) => res.json())
        .then((data) => setTradBreakfasts(data))
    }, []);

    const breakfastInfo = tradBreakfasts.map(breakfast => {
        return <MenuItem name={breakfast.name} desc={breakfast.description} price={breakfast.price} />
    })

    return (
        <div>
            {breakfastInfo}
        </div>
    )
}

export default TraditionalBreakfasts;