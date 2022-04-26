import './App.css';
import Mensaje from './Mensaje';
import { useState } from 'react';

const App= ()=> {  
  const MensajeContador=()=>{
    return <h1>No se uso contador</h1>
  }
  let [Contador,setContador]=useState(0) 
  let [Counter ,setCounter]=useState([])
  const Number=({number})=>{
      return <h1>{number}</h1>
  }
  const ContadorInicial = () =>{

    if(Contador<10){   setContador(prevContador =>{

       Counter.push(prevContador+1)
       console.log(Counter)
      return prevContador +1
    })}
 
}
console.log(Counter)
const ContadorReset = ({contadorI}) =>{
 setContador(0)
 setCounter([])
}
const isEven = Contador%2===0
let mensajeParImp=isEven ? 'Es par' :'Es impar' 
  return (
    <div className="App">
    <button style={{width:'80px', height:'15px'}} onClick={ContadorInicial}>Aumentar </button>
    <button style={{width:'80px', height:'15px'}} onClick={ContadorReset}>Reset </button>
    <Number number={Contador}/>
    {Counter.length ===0 ? (<MensajeContador/>):( <Mensaje color='red' message='Estamos trabajando '/>)}
    <p>{mensajeParImp}</p>
    </div>
  );
}

export default App;
