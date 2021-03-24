import React, {useEffect, useState} from 'react';

import Breakfast from './Breakfast/Breakfast';

const Menu = props => {
    
    const [ mealTime, setMealTime ] = useState(null);

    return(
        <div>
            <h1>MENU</h1>
            <button onClick={() => setMealTime(<Breakfast />)}>Breakfast</button>
            <button onClick={() => setMealTime("Lunch to be added later")}>Lunch</button>
            {mealTime}
        </div>
    )
}

export default Menu;