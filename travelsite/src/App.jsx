import Navbar from './Navbar'
import './App.css'
import { data } from './data'
import Card from './Card'

function App() {
  const travelCardElements = data.map(function(item){
    return <Card
    key={item.id}
    {...item}
    />
  })
  return (
    <div className="App">
     <Navbar />
     <section className='card-section'>
      {travelCardElements}
     </section>
    </div>
  )
}

export default App
