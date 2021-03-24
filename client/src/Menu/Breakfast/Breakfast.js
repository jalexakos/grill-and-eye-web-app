import React, { useState } from 'react';

import TraditionalBreakfasts from './TraditionalBreakfasts/TraditionalBreakfasts'

const Breakfast = props => {

    const [ menuInfo, setMenuInfo ] = useState(null);

    return(
        <div>
            <button onClick={() => setMenuInfo(<TraditionalBreakfasts />)}>Traditional Breakfasts</button>
            <button>Omelettes</button>
            {menuInfo}
        </div>
    )
}

export default Breakfast;