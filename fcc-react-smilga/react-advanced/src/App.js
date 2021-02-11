import React from 'react'

import HorizontalSeparator from './shared/ui/horizontal-separator'
import UseEffectBasics from "./topics/2_useEffect/useEffect-basics";
import UseEffectCleanup from "./topics/2_useEffect/useEffect-cleanup";
import MultipleReturns from "./topics/3_conditionalRendering/multiple-returns";
import ShortCircuit from "./topics/3_conditionalRendering/short-circuit";
import ShowHide from './topics/3_conditionalRendering/show-hide'

function App() {
    return (
        <div className="container">
            <h2>React's Advanced Features</h2>
            <HorizontalSeparator thick="true"/>

            <h3>React Conditional Rendering</h3>
            <HorizontalSeparator/>

            <MultipleReturns />
            <HorizontalSeparator />

            <ShortCircuit />
            <HorizontalSeparator />

            <ShowHide />
            <HorizontalSeparator />

            <HorizontalSeparator thick="true"/>
            <h3>React's useEffect Hook Examples</h3>
            <HorizontalSeparator/>

            <UseEffectBasics/>
            <HorizontalSeparator/>

            <UseEffectCleanup/>
            <HorizontalSeparator/>

            {/*<UseEffectFetchData/>*/}
            {/*<HorizontalSeparator/>*/}

            {/*<HorizontalSeparator thick="true"/>*/}
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
