import React, {useState} from 'react';

const UseStateSimpleCounter = (props) => {
    const [value, setValue] = useState(0);

    const complexIncrementor = () => {
        setTimeout(() => {
            console.log(`timeout finished, current value ${value}`)
            // setValue(value + 1) // doesn't work in async context
            setValue((prevState) => {
                return prevState + 1;
            })
        }, 200)
    }

    return (
        <>
            <h2>useState Simple Counter Example</h2>

            <section style={{margin: '4rem 0'}}>
                <h3>Simple Counter</h3>
                <h2>{value}</h2>

                <button className='btn' onClick={() => setValue(value - 1)}>
                    Decrease
                </button>
                <button className='btn' onClick={() => setValue(value + 1)}>
                    Increase
                </button>
                <button className='btn' onClick={() => setValue(0)}>
                    Reset
                </button>
            </section>

            <section style={{margin: '4rem 0'}}>
                <h3>Slightly more Complex Counter</h3>
                <h2>{value}</h2>

                <button className='btn' onClick={complexIncrementor}>
                    Timeout Increase
                </button>
            </section>
        </>
    );
}

export default UseStateSimpleCounter;