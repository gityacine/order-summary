import Card from "./components/Card"

function App() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#e0e8ff] bg-[url('/assets/pattern-background-mobile.svg')] sm:bg-[url('/assets/pattern-background-desktop.svg')] bg-contain bg-no-repeat">
      <Card />
    </div>
  )
}

export default App
