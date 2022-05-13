import { useEffect, useState } from 'react';
import './App.css';

function App() {
  
  const [starship,setStarship] = useState([])

  const getShip = async () =>{
  const response = await fetch ( `https://swapi.dev/api/starships/`)

  const data = await response.json()
  setStarship(data)
  }

  
  
  useEffect(()=>{getShip()},[])
  
  console.log(starship.results)
  console.log(starship)
  
  if (starship.length <= 0){
    return <h3>Wait</h3>
  }
    return (
   <div className="App">
    <h1 className="Starships">The Enterprise</h1>
    <div className='container'>
    {starship.results.map((ship,index)=>{
      return (
        <div className='ship' key={index}>

          <h3>{ship.name}</h3>

          <p>{ship.manufacturer}</p>

          {ship.model}
        </div>
    )})
  }
    </div>
  </div>
    )
  }

export default App;
