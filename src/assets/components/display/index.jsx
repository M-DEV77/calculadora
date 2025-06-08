import {DisplayContainer,Display1,Display2} from "./displayStyle";
const Display =({d1,d2})=>{
  return(
    <DisplayContainer>
      <Display1 id="id2">
        {d2}
      </Display1>
      <Display2 id="id1">
        {d1}
      </Display2>
    </DisplayContainer>
  )
}
export default Display;