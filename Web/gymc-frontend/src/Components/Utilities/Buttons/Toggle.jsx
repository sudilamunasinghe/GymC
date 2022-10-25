
import React,{useState} from 'react';
import './Toggle.css';


function App(){
  const [state, setState] = useState(false);
  const toggle=()=>{
    setState(!state);
  }

  return (
    <div className="App">
      <button onClick={toggle} className={'toggle--button ' + (state ? 'toggle--close':'')}>
        {state ? 'Inactive' :'Active'}

      </button>
    </div>
  );
}
export default App;