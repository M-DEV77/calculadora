import { ButtonContainer } from "../styles/styles";
const Button =({label,onClick})=> {
  return (
    <ButtonContainer onClick={onClick}>
     {label}
    </ButtonContainer>   
  )
}

export default Button;
