type Props = {
  onClickHistory: (index:number) => void
  index : number;
};
export const HistoryButton = (props:Props)=>{
  const {onClickHistory,index} = props
  return (
    <div>
      <button onClick={()=>onClickHistory(index)}>go to game #{index}</button>
    </div>
  )
}