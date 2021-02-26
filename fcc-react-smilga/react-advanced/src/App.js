import React from 'react'

import HorizontalSeparator from './shared/ui/horizontal-separator'
import UseReducer from './topics/6_useReducer'
import UseContextExample from "./topics/7_propDrilling/useContextExample";

function App() {
    return (
        <div className='container'>
            <h2>React's Advanced Features</h2>
            <HorizontalSeparator thick='true'/>

            <h4>React context Example</h4>
            {/*<PropDrillingExample/>*/}
            <UseContextExample/>
            <HorizontalSeparator/>

            <h3>React UseReducer</h3>
            <UseReducer/>
            <HorizontalSeparator/>

            {/*<h3>React UseRef</h3>*/}
            {/*<UseRefBasics/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<h3>React Forms</h3>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<ControlledInputs/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<MultipleInputs/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<h3>React Conditional Rendering</h3>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<MultipleReturns />*/}
            {/*<HorizontalSeparator />*/}

            {/*<ShortCircuit />*/}
            {/*<HorizontalSeparator />*/}

            {/*<ShowHide />*/}
            {/*<HorizontalSeparator />*/}

            {/*<HorizontalSeparator thick='true'/>*/}
            {/*<h3>React's useEffect Hook Examples</h3>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<UseEffectBasics/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<UseEffectCleanup/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<UseEffectFetchData/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<HorizontalSeparator thick='true'/>*/}
            {/*<h3>React's useState Hook Examples</h3>*/}

            {/*<UseStateSimpleCounter/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<UseStateArray/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<UseStateBasics/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<ErrorExample/>*/}
            {/*<HorizontalSeparator/>*/}
        </div>
    )
}

export default App
