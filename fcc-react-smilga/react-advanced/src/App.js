import HorizontalSeparator from './shared/ui/horizontal-separator'
import ErrorExample from './topics/1_useState/error-example'
import UseStateArray from './topics/1_useState/useState-array'
import UseStateBasics from './topics/1_useState/useState-basics'
import UseStateSimpleCounter from './topics/1_useState/useState-simpleCounter'
import UseEffectBasics from "./topics/2_useEffect/useEffect-basics";
import UseEffectCleanup from "./topics/2_useEffect/useEffect-cleanup";
import UseEffectFetchData from "./topics/2_useEffect/useEffect-fetchData";

function App() {
    return (
        <div className="container">
            <h2>React's Advanced Features</h2>
            <HorizontalSeparator thick="true"/>

            <h3>React's useEffect Hook Examples</h3>
            <HorizontalSeparator/>

            <UseEffectBasics/>
            <HorizontalSeparator/>

            <UseEffectCleanup/>
            <HorizontalSeparator/>

            <UseEffectFetchData />

            <HorizontalSeparator thick="true"/>
            <h3>React's useState Hook Examples</h3>

            <UseStateSimpleCounter/>
            <HorizontalSeparator/>

            <UseStateArray/>
            <HorizontalSeparator/>

            <UseStateBasics/>
            <HorizontalSeparator/>

            <ErrorExample/>
            <HorizontalSeparator/>
        </div>
    )
}

export default App
