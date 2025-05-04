import { useState,useEffect } from 'react';
import './App.css';
import { Block } from './components/Block';
import { HistoryButton } from './components/HistoryButton';

function App() {
  const [isPlayerX , setIsPlayerX] = useState(true)
  const [array , setArray] = useState(["","","","","","","","",""])
  const [isGameSet, setIsGameSet] = useState(false)
  const [history,setHistory] = useState([Array(9).fill(null)])

  const onClickBlock = (index:number) => {
    const newArray = [...array]
    if(newArray[index]) return
    if(isGameSet) return
    console.log(111)
    if (isPlayerX){
      newArray[index]="○"
    }else{
      newArray[index]="×"
    }
    console.log(index)

    setArray(newArray)
    // playerフラグを反転
    setIsPlayerX(!isPlayerX)

    // 履歴記録
    const newHistory = [...history]
    newHistory.push(newArray)
    setHistory(newHistory)
  }

  const onClickHistory = (index:number) => {
    console.log(index)
    const targetHistory = history[index]
    setArray(targetHistory)

  }
  const checkWinner = ()=>{
    console.log(222)
    const arr1 = array[0] === array[1] ? (array[1] === array[2] ? (array[2] !== "" ? true : false) : false ) : false
    const arr2 = array[3] === array[4] ? (array[4] === array[5] ? (array[5] !== "" ? true : false) : false ) : false
    const arr3 = array[6] === array[7] ? (array[7] === array[8] ? (array[8] !== "" ? true : false) : false ) : false
    const arr4 = array[0] === array[3] ? (array[3] === array[6] ? (array[6] !== "" ? true : false) : false ) : false
    const arr5 = array[1] === array[4] ? (array[4] === array[7] ? (array[7] !== "" ? true : false) : false ) : false
    const arr6 = array[2] === array[5] ? (array[5] === array[8] ? (array[8] !== "" ? true : false) : false ) : false
    const arr7 = array[0] === array[4] ? (array[4] === array[8] ? (array[8] !== "" ? true : false) : false ) : false
    const arr8 = array[2] === array[4] ? (array[4] === array[6] ? (array[6] !== "" ? true : false) : false ) : false
    if(arr1 || arr2 ||arr3 ||arr4 ||arr5 ||arr6 ||arr7 ||arr8){
      setIsGameSet(true)
      console.log("game set!!!")
    }
  }

  useEffect(checkWinner, [array])
  return (
    <div className="App">
      {isGameSet ? (
        <p>Winner: {isPlayerX ? "Y": "X" }</p>
      ):(
        isPlayerX ?(
          <p>Next player: X</p>
        ):(
          <p>Next player: Y</p>
        )
      )}
      <div className="container">
        {array.map((arr,index)=>(
          <>
            <Block  val={arr}  onClickBlock={onClickBlock} index={index}/>
          </>
        ))}
      </div>

      <div>
        {history.map((his,index)=>(
          <>
            <HistoryButton onClickHistory={onClickHistory} index={index}/>
          </>
        ))}
      </div>

    </div>
  );
}

export default App;
