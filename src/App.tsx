import { Button } from './components/ui/button'
import './index.css'

function App() {

  return (
    <div className="flex justify-center items-center h-screen w-full bg-black">
      <Button Variant="text" Color="default">Click me</Button>
      <Button Variant="text" Color="secondary">Click me</Button>
    </div>
  )
}

export default App
