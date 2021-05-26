import './App.css';
import React,{useState} from 'react';

function App() {
  let res;
  const [success,setSuccess]=useState(false);
  const [failure,setFailure]=useState(false);
  const [value,setValue]=useState("");

  
  const handleChange = (e)=>{
    setValue(e.target.value);
  }
  const handleClick = ()=>{
    if(success||failure) {
      setSuccess(false);
      setFailure(false);
    }
    
    res=value;
    if(value.toLowerCase() === value.split('').reverse().join('').toLowerCase()){
      setSuccess(true);
      setValue("");
      return;
    }

    setFailure(true);
    setValue("");
   
  }

  return (
    <div className="App">
      <div>
          <input className="inputStyle" type="text" value={value} placeholder="Enter a valid word" onChange={(e)=>handleChange(e)} />
          <button className="Button" onClick={()=>handleClick()} >Search</button>
      </div>
      <div className="result" >
      {success && <h1>Yeah {res} is Palindrome!!!</h1>}
      {failure && <h1>Sorry {res} is not Palindrome </h1>}
      </div>
    </div>
  );
}

export default App;
