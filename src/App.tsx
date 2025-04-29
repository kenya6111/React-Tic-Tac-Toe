import { useState } from 'react';
import './App.css';
import { Block } from './components/Block';

function App() {
  const [isPlayerX , setIsPlayerX] = useState(true)
  const [array , setArray] = useState(["","","","","","","","",""])
  const onClickBlock = (index:number) => {
    console.log(111)
    const newArray = [...array]
    if(newArray[index]) return
    if (isPlayerX){
      newArray[index]="○"
    }else{
      newArray[index]="×"
    }
    console.log(index)

    setArray(newArray)
    // playerフラグを反転
    setIsPlayerX(!isPlayerX)
  }
  return (
    <div className="App">
      <div className="container">
        {array.map((arr,index)=>(
          <>
          <Block  val={arr}  onClickBlock={onClickBlock} index={index}/>
          </>
        ))}
      </div>

    </div>
  );
}

export default App;
