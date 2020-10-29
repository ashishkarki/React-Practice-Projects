import HorizontalSeparator from './shared/ui/horizontal-separator'
import ErrorExample from './topics/1_useState/error-example'
import UseStateBasics from './topics/1_useState/useState-basics'

function App() {
  return (
    <div className="container">
      <h2>React's Advanced Features</h2>
      <HorizontalSeparator thick="true" />

      <ErrorExample />
      <HorizontalSeparator />

      <UseStateBasics />
      <HorizontalSeparator />
    </div>
  )
}

export default App
