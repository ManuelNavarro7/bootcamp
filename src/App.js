import './App.css';
import Mensaje from './Mensaje';
import { useState } from 'react';

const App= ()=> {  
  
  const MensajeContador=()=>{
    return <h1>No se uso contador</h1>
  }
  const NumeroNewCounterLeft=({title})=>{
    return <h1>{title}</h1>
  }
  let [Contador,setContador]=useState(0) 
  let [Counter ,setCounter]=useState([])
  const Number=({number})=>{
      return <h1>{number}</h1>

  }


  const ContadorInicial = () =>{

    if(Contador<10){   
      
      setContador(prevContador =>{

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

//---------------------------------------------

const InitialState = {
left:2,
right:4,
mensaje:"Chinga tu madre"

}

const [FinalClicks, setFinalClicks]=useState([]);

const[newCounter ,setNewCounter]=useState(InitialState)

const Number2left=({number})=>{
  return <h1>{number}</h1>

}
const Number2right=({number})=>{
  return <h1>{number}</h1>

}

const Number2Clicks=({number})=>{
  return <h1>{number}</h1>

}
const HMesage=({title})=>{
  return <h1>{title}</h1>

}



const handleNewClickLeft=()=>{
  const newCounterState={
  ...newCounter,
  left:newCounter.left +1,
};

setNewCounter(newCounterState);
setFinalClicks((prevFinalClicks=>[...prevFinalClicks,'L']));

};

const handleNewClickRight=()=>{
  const newCounterState={
  ...newCounter,
  right:newCounter.right +1,
};
setNewCounter(newCounterState);
setFinalClicks((prevFinalClicks=>[...prevFinalClicks,'R']));
};
//----------------------------------

const left = FinalClicks.filter(clicks=>clicks ==='L')
const right = FinalClicks.filter(clicks=>clicks ==='R')
console.log(FinalClicks)


  return (
    <div className="App">
    <button style={{width:'80px', height:'15px'}} onClick={ContadorInicial}>Aumentar </button>
    <button style={{width:'80px', height:'15px'}} onClick={ContadorReset}>Reset </button>
    <Number number={Contador}/>
    {Counter.length ===0 ? (<MensajeContador/>):( <Mensaje color='red' message='Estamos trabajando '/>)}
    <p>{mensajeParImp}</p>
 {left.length}
 {right.length}
    <NumeroNewCounterLeft title={'Nuevo Contador'}/>
    <Number2left number={newCounter.left}/>
    <Number2right number={newCounter.right}/>
    <Number2Clicks number={FinalClicks.length}/>
    <HMesage title={newCounter.mensaje}/>
    {FinalClicks}
    <button style={{width:'200px', height:'15px'}} onClick={handleNewClickLeft}>Aumentar Left </button>
    <button style={{width:'200px', height:'15px'}} onClick={handleNewClickRight}>Aumentar Right </button>
    </div>
  );
}

export default App;
