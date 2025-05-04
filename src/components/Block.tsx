import styled from "styled-components";
type Props = {
  val: string;
  onClickBlock: (index:number) => void
  index : number;
};
export const Block = (props:Props)=>{
  const {val,onClickBlock,index} = props
  return (
    <Wrapper onClick={()=>onClickBlock(index)}>
      {val}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  border:1px solid black;
  font-size:6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;