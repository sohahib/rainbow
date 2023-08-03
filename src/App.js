import { useState } from 'react';
import './App.css';
import ColorBlock from './ColorBlock';
import ColorForm from './colorForm';

function App() {
  let [colors, setColors] = useState(['violet', 'blue', 
  "lightblue", 'greenyellow', 
  'yellow', 'orange', 'red'])
   
  let colorMap = colors.map((color, i)=>{
    return(
      <ColorBlock color={color} key={i}/>
    )
  })

    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }

    return (
        <div className="App">
          {colorMap}
          <ColorForm addColor={addColor}/>
        </div>
    )

}

export default App;
