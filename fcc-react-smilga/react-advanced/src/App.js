import HorizontalSeparator from './shared/ui/horizontal-separator'
import ErrorExample from './topics/1_useState/error-example'
import UseStateArray from './topics/1_useState/useState-array'
import UseStateBasics from './topics/1_useState/useState-basics'
import UseStateObject from './topics/1_useState/useState-object'

function App() {
  return (
    <div className="container">
      <h2>React's Advanced Features</h2>
      <HorizontalSeparator thick="true" />



      <UseStateObject />
      <HorizontalSeparator />

      <UseStateArray />
      <HorizontalSeparator />

      <UseStateBasics />
      <HorizontalSeparator />

      <ErrorExample />
      <HorizontalSeparator />
    </div>
  )
}

export default App
