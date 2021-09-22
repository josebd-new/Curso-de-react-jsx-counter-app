import React, { useState } from 'react';
import PropTypes from 'prop-types';


const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    //handleAdd
    const handleAdd = () => {

        setCounter(counter + 1);
        /* tambien se puede hacer así
        setCounter( (counter) => counter + 1)
        hbrá veces que tenga que ponerlo así */
    }
    //handleReset
    const handleReset = () => {

        setCounter(value);

    }

    const handleSubstract = () => setCounter(counter - 1);



    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>

            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>


        </>
    );

}

CounterApp.propTypes = {
    // value: PropTypes.number.isRequired
}

export default CounterApp;